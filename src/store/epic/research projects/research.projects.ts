import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import { getResearchProjectFailedAction, getResearchProjectRequestAction, getResearchProjectSuccessAction } from "../../reducers/slice/projects/research.projects";
import ResearchProjectsService from "../../../services/auth/research.projects";


export const getResearchProjectListEpic = (action$: any) => {
    return action$.pipe(
        ofType(getResearchProjectRequestAction),
        mergeMap(() =>
            from(ResearchProjectsService.get()).pipe(
                map((response: any) => {
                    if (response.data) {
                        if (response.data.status === 422 || response.data.success == 0) {
                            return getResearchProjectFailedAction(response.data)
                        }
                        return getResearchProjectSuccessAction(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError(() => {
                    const result: any = {
                        message: "Error while getting Research Projects data.",
                    };
                    return of(getResearchProjectFailedAction(result));
                })
            )
        )
    );
};
