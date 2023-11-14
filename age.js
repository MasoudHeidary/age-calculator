//console.log("age.js imported")

let BIRTH = new Date(2000, 0, 30);

function _get_now() {
    let d = new Date();
    return d;
}

function _is_birth_passed(birth) {
    let _b = new Date(birth);
    let _n = _get_now();
    _b.setYear(_n.getYear());

    return _n > _b;
}
//console.log ("birth passed", _is_birth_passed(BIRTH))


function _get_last_birth(birth) {
    let n = _get_now();
    let b = new Date(birth);
    if (_is_birth_passed(birth)) {
        b.setFullYear(n.getFullYear());
    } else {
        b.setFullYeat(n.getFullYear() - 1);
    }
    //console.log("lqst birth", b);
    return b;
}

function _get_comming_birth(birth) {
    let n = _get_now();
    let b = new Date(birth);
    if (_is_birth_passed(birth)) {
        b.setFullYear(n.getFullYear() + 1);
    } else {
        b.setFullYear(n.getFullYear());
    }
    //console.log("comming birth", b)
    return b;
}

function _get_year_time(birth) {
    return (_get_comming_birth(birth) - _get_last_birth(birth)) / 1000;
}

function _get_spend_time(birth) {
    return (_get_now() - _get_last_birth(birth)) / 1000;
}

function _get_age_t(birth) {
    return _get_now().getFullYear() - birth.getFullYear();
}

function _get_age_f(birth) {
    return _get_spend_time(birth) / _get_year_time(birth);
}

function get_age(birth) {
    let age = _get_age_t(birth) + _get_age_f(birth);
    //console.log("func, get_age, ret: ", age)
    return age;
}


