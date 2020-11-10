const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
    owner_info: {
        name: String,
        student_id: String,
        college_years: String,
        department: String,
        address: {
            no: String,
            sub_district: String,
            district: String,
            province: String,
        },
        tel_number: String,
        parents_tel_number: String,
        tel_number: String,
        advisor: String,
    },
    subject_info: {
        semester: String,
        year: String,
        subject_name: String,
        subject_id: String,
        section: String,
        teacher_name: String
    },
    reason: String,
    pay_money: {
        type : Boolean,
        default: false
    },
    acception: {
        advisor: {
            comment: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            },
            approve: {
                type: Boolean,
                default: false
            },
            accept: {
                type: Boolean,
                default: false
            }
        },
        staff: {
            name: {
                type: String,
                default: ""
            },
            comment: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            },
            approve: {
                type: Boolean,
                default: false
            },
            accept: {
                type: Boolean,
                default: false
            }
        },
        teacher: {
            name: {
                type: String,
                default: ""
            },
            comment: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            },
            approve: {
                type: Boolean,
                default: false
            },
            accept: {
                type: Boolean,
                default: false
            }
        }, 
        doyen: {
            name: {
                type: String,
                default: ""
            },
            comment: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            },
            approve: {
                type: Boolean,
                default: false
            },
            accept: {
                type: Boolean,
                default: false
            }
        }   
    },
    form_status: {
        type: Boolean,
        default: false
    },
    timestamps: {
        type: String
    }
});

module.exports = mongoose.model('enrollForm', formSchema)

