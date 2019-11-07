import _ from "lodash";
//5. These features must be extendable / reusable so that in future we can reuse these code to support other social media applications
const funcs = {

    sort(twits,sortBy,sortDirection) {

        twits = _.orderBy(twits, [sortBy],[sortDirection]);

        return twits;

    }, 
    filter(twits, search) {

        twits = _.filter(twits, item => item.text.toLowerCase().indexOf(search) !== -1 );

        return twits;

    }
}


export default funcs 