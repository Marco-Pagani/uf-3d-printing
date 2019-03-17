/**
 * Put any reusable helper functions here
 */
export class Helper {
    /**
     * Sorts a list in specified direction by passed keys
     *
     * @param list The list to be sorted
     * @param key The key to sort by
     * @param dir The direction of the sort
     * @param bkey Secondary key to sort by
     * @param ckey Tertiary key to sort by
     */
    static sortBy(list, key, dir = 1, bkey?, ckey?) {
        list.sort((a, b) => {
            if (a[key] === b[key] && bkey) {
                if (a[bkey] === b[bkey] && ckey) {
                    return a[ckey] > b[ckey] ? 1 : -1;
                }
                return a[bkey] > b[bkey] ? 1 : -1;
            }
            return a[key] > b[key] ? 1 * dir : -1 * dir;
        });
        return list;
    }
}
