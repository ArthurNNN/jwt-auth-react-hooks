import axios from 'axios';
const apiAuthUrl  = process.env.REACT_APP_API_URL_AUTH;

export const register = async (username, email, password) => {
    try {
        const response = await axios
            .post(apiAuthUrl + 'signup', 
                {
                    username,
                    email,
                    password
                },
            );
        if(response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;

    } catch(error) {
        console.log(error.message)
        return ({error: 'Username or Email already exist.'})
    }

};

export const login = async (username, password) => {
    try {
        const response = await axios
            .post(apiAuthUrl + 'signin', {
                username,
                password
            });
        if(response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch(error) {
        console.error(error.message);
        return ({error: 'User or Password are incorrect. Please try again.'});
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};