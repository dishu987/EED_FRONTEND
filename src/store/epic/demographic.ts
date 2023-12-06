import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import { getDemographicFailedAction, getDemographicRequestAction, getDemographicSuccessAction } from "../reducers/slice/demographic";
import DemographicService from "../../services/data/demographic";

export const getDemographicEpic = (action$: any) => {
    return action$.pipe(
        ofType(getDemographicRequestAction),
        mergeMap(() =>
            from(DemographicService.get()).pipe(
                map((response: any) => {
                    if (response.data) {
                        if (response.data.status === 422 || response.data.success == 0) {
                            return getDemographicFailedAction(response.data)
                        }
                        return getDemographicSuccessAction(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError(() => {
                    const result: any = {
                        message: "Error while getting Demographic data.",
                    };
                    return of(getDemographicFailedAction(result));
                })
            )
        )
    );
};
