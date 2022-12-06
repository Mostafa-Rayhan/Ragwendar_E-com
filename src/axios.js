import axios from 'axios';
import Cookies from 'js-cookie';
// import Alert from './pages/alerts/alert';

let baseURL = "http://localhost:5000/api/" ;

// if(window.location.href.includes('https://fc.unisight.in') ) {
//     baseURL = 'https://framechange--backend.herokuapp.com';
// }else{
//     baseURL = 'https://framechange-staging.herokuapp.com';
// }


// const setAlertMain = (typeOfAlert, descOfAlert, setAlert) => {
//     return(
//         <>
//             <Alert type={typeOfAlert} desc={descOfAlert} alertState={setAlert} />
//         </>
//     )
// }


const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 60*1000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'Bearer ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    }, 
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

		// const access = Cookies.get('access_token');
        const access = localStorage.getItem('access_token');
        console.log(access);

        if(!(access)){
            localStorage.clear(); 
            
            // Cookies.remove('access_token');
            // Cookies.remove('refresh_token');
            // window.location.href = '/login/';
        }

		// const access_expiry = JSON.parse(atob(access.split('.')[1]));
        // if (typeof error.response === 'undefined') {
        //     alert(
        //         'A server/network error occurred. ' +
        //             'Looks like CORS might be the problem. ' +
        //             'Sorry about this - we will get it fixed shortly.'
        //     );
        //     return Promise.reject(error);
        // }

        // if (error.response.status === 403 && error.response === "You don't have permissions to perform this action. Please contact your Admin.") {
        //     alert("You don't have permissions to perform this action. Please contact your Admin.");
        //     setAlertMain('error', "You don't have permissions to perform this action. Please contact your Admin.", true);
        //     return Promise.reject(error);
        // }


        


        // if (
        //     error.response.status === 401
        //      &&
        //      window.location.pathname!='/login'
            // originalRequest.url === baseURL + 'auth/api/token/refresh/'
        // ) {
            

			

            // const refreshToken = localStorage.getItem('refresh_token');
            // console.log("refresh", refreshToken);

			// if (refreshToken) {
		    //     const access_now = Math.ceil(Date.now() / 1000);
                
            //     if (access_expiry.exp > access_now){
            //         axiosInstance.defaults.headers['Authorization'] =
            //             'Bearer ' + access;
            //         originalRequest.headers['Authorization'] =
            //             'Bearer ' + access;
                    
            //         return axiosInstance(originalRequest);
            //     }

            //     const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

            //     // exp date in token is expressed in seconds, while now() returns milliseconds:
            //     const now = Math.ceil(Date.now() / 1000);
                
            //     if (tokenParts.exp > now) {
            //         console.log("not expired", refreshToken);
            //         // return;
            //         return axiosInstance
            //             .post('auth/token/refresh/', { refresh: localStorage.getItem('refresh_token') })
            //             .then((response) => {
            //                 localStorage.setItem('access_token', response.data.access);
            //                 localStorage.setItem('refresh_token', response.data.refresh);
            //                 Cookies.set('access_token', localStorage.getItem('access_token'));
            //                 Cookies.set('refresh_token', localStorage.getItem('refresh_token'));

            //                 axiosInstance.defaults.headers['Authorization'] =
            //                     'Bearer ' + response.data.access;
            //                 originalRequest.headers['Authorization'] =
            //                     'Bearer ' + response.data.access;
                            
            //                 return axiosInstance(originalRequest);
            //             })
            //             .catch((err) => {
            //                 console.log(err);
            //                 const access = localStorage.getItem('access_token');
            //                 const now = Math.ceil(Date.now() / 1000);

            //                 const access_expiry = JSON.parse(atob(access.split('.')[1]));
            //                 if (access_expiry.exp > now){
            //                     axiosInstance.defaults.headers['Authorization'] =
            //                         'Bearer ' + localStorage.getItem('access_token');
            //                     originalRequest.headers['Authorization'] =
            //                         'Bearer ' + localStorage.getItem('access_token');
                                
            //                     return axiosInstance(originalRequest);
            //                 }else{
            //                     localStorage.clear();
            //                     Cookies.remove('access_token');
            //                     Cookies.remove('refresh_token');
            //                     window.location.href = '/login/';
            //                 }
            //             });
            //     } else {
            //         console.log('Refresh token is expired', tokenParts.exp, now);
            //         console.log("expired", refreshToken);
                    
            //         localStorage.clear();
                    
			// 		Cookies.remove('access_token');
			// 		Cookies.remove('refresh_token');
            //         window.location.href = '/login/';
            //     }
            // } 
            // else {
            //     console.log('Refresh token not available.');

            //     localStorage.clear();
                
			// 	Cookies.remove('access_token');
			// 	Cookies.remove('refresh_token');
            //     window.location.href = '/login/';
            // }
        // }


        // specific error handling done elsewhere
        return Promise.reject(error);
    }
);

export default axiosInstance;
export {baseURL};