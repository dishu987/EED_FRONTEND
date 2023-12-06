import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import { getFacultyFailedAction, getFacultyRequestAction, getFacultySuccessAction } from "../../reducers/slice/peoples/faculties";
import FacultyService from "../../../services/data/faculty";

export const getFacultyListEpic = (action$: any) => {
    return action$.pipe(
        ofType(getFacultyRequestAction),
        mergeMap(() =>
            from(FacultyService.getAll()).pipe(
                map((response: any) => {
                    if (response.data) {
                        if (response.data.status === 422 || response.data.success == 0) {
                            return getFacultyFailedAction(response.data)
                        }
                        return getFacultySuccessAction(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError(() => {
                    const result = {
                        message: "Error while getting faculty data.",
                    };
                    return of(getFacultyFailedAction(result));
                })
            )
        )
    );
};
