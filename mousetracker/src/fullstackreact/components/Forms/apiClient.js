import Core from '../api/electives.json';
import Electives from '../api/electives.json';

const Courses = {
    core: Core,
    electives: Electives,
};

function apiClient(department){
    return{
        then: function(cb){
            setTimeout(() => { cb(Courses[department]); }, 1000);
        },
    };
};

export default apiClient;