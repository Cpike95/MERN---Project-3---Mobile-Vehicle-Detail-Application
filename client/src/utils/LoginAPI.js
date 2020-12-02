import axios from "axios";

export default {
    login: function(user) {

        return axios.post('/api/admin/login', function(req, res) {
            if (req.user) {
                res.render('admin/login', { user: req.user });
            } else {
                res.redirect('/');
            }
        }
        )},

    logout: function() {
        return axios.get('/api/admin/logout')
    },
    signUp: function(user) {
        return axios.post("/api/admin/signup", user)
    }

};
