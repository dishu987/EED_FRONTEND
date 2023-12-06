import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import AchievementsService from "../../services/auth/achievements";
import { getAchievementsRequestAction, getAchievementsFailedAction, getAchievementsSuccessAction } from "../reducers/slice/achievements/achievements";

export const getAchievementscEpic = (action$: any) => {
    return action$.pipe(
        ofType(getAchievementsRequestAction),
        mergeMap(() =>
            from(AchievementsService.get()).pipe(
                map((response: any) => {
                    if (response.data) {
                        if (response.data.status === 422 || response.data.success == 0) {
                            return getAchievementsFailedAction(response.data)
                        }
                        return getAchievementsSuccessAction(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError(() => {
                    const result: any = {
                        message: "Error while getting data.",
                    };
                    return of(getAchievementsFailedAction(result));
                })
            )
        )
    );
};
