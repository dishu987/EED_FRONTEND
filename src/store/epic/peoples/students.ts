import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import StudentsAddService from "../../../services/auth/students";
import { getStudentFailedAction, getStudentRequestAction, getStudentSuccessAction } from "../../reducers/slice/peoples/students";

export const getStudentsListEpic = (action$: any) => {
    return action$.pipe(
        ofType(getStudentRequestAction),
        mergeMap(() =>
            from(StudentsAddService.get_all()).pipe(
                map((response: any) => {
                    if (response.data) {
                        if (response.data.status === 422 || response.data.success == 0) {
                            return getStudentFailedAction(response.data)
                        }
                        return getStudentSuccessAction(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError(() => {
                    const result: any = {
                        message: "Error while getting students data.",
                    };
                    return of(getStudentFailedAction(result));
                })
            )
        )
    );
};
