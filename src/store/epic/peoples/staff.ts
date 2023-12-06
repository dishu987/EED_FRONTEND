import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import StaffService from "../../../services/auth/staff";
import { getStaffFailedAction, getStaffRequestAction, getStaffSuccessAction } from "../../reducers/slice/peoples/staff";

export const getStaffListEpic = (action$: any) => {
    return action$.pipe(
        ofType(getStaffRequestAction),
        mergeMap(() =>
            from(StaffService.getAll()).pipe(
                map((response: any) => {
                    if (response.data) {
                        if (response.data.status === 422 || response.data.success == 0) {
                            return getStaffFailedAction(response.data)
                        }
                        return getStaffSuccessAction(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError(() => {
                    const result: any = {
                        message: "Error while getting Staff data.",
                    };
                    return of(getStaffFailedAction(result));
                })
            )
        )
    );
};
