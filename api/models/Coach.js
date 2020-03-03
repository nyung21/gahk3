/**
 * Coach.js
 *
 * @description :: A model definition.  Represents a coachbase table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    // upload attributes

    avatar_sign: {
      type: 'string'
    },



    CoachNo: {
      type: 'number',
      autoIncrement:true

    },

    Confirm: {
      type:'string',

    },


    New_coach:{
      type:'string',

    },

    Level:{
      type:'string',

    },

    Disciplines1:{
      type:'string',

    },

    Disciplines2:{
      type:'string',

    },

    Disciplines3:{
      type:'string',

    },

    Disciplines4:{
      type:'string',

    },
    Disciplines5:{
      type:'string',

    },

    Disciplines6:{
      type:'string',

    },


    Engname:{
      type:'string',

    },

    ChiName:{
      type:'string',

    },


    Id:{
      type:'string',

    },

    Gender:{
      type:'string',

    },

    Birthd:{
      type:'ref',
      columnType: 'date'

    },


    Occupation:{
      type:'string',

    },


    Education:{
      type:'string',

    },

    Hnumber:{
      type:'string',

    },

    Mnumber:{
      type:'string',

    },


    Email:{
      type:'string',

    },

    ChiAddress:{
      type:'string',

    },

    HaveBeenCoach:{
      type:'string',

    },

    HaveBeenCoach1:{
      type:'string',

    },

    Have:{
      type:'string',

    },
    Have2:{
      type:'string',

    },




    Qualification:{
      type:'string',

    },


    Cert_no:{
      type:'string',

    },


    date_Qualification:{
      type:'string',

    },


    Qualification1:{
      type:'string',

    },

    Accredited_coachNo:{
      type:'string',

    },


    date_Qualification1:{
      type:'ref',
      columnType: 'date'

    },

    Qualification2:{
      type:'string',

    },


    Cert_no2:{
      type:'string',

    },


    date_Qualification2:{
      type:'ref',
      columnType: 'date'

    },



    Qualification3:{
      type:'string',


    },
    Issued_by:{
      type:'string',


    },

    date_Qualification3:{
      type:'string',


    },

    Qualification4:{
      type:'string',


    },

    others:{
      type:'string',


    },



    judges:{
      type:'string',


    },

    date_qualification5:{
      type:'string',


    },



    date_training:{
      type:'string',


    },

    school_training:{
      type:'string',


    },
    Discipline_training:{
      type:'string',


    },


    Badges_date:{
      type:'string',


    },

    Badges_school:{
      type:'string',


    },
    Badges_no:{
      type:'string',


    },



    Activities_date:{
      type:'string',


    },

    Activities_event:{
      type:'string',


    },
    Activities_badges:{
      type:'string',


    },



    Coaching_workshops_date:{
      type:'string',


    },

    Coaching_workshops_event:{
      type:'string',


    },

    Coaching_workshops_organization:{
      type:'string',


    },

    hope:{
      type:'string',


    },




    avatar: {
      type: 'string'
    },

    avatar_document: {
      type: 'string'
    },

    CheckNo: {
      type: 'string',
    },

    comfirm_coach:{
      type: 'string'
    },

    check:{
      type: 'string'
    },










    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    user: {
      collection: 'User',
      via: 'coach'
    }
  },

};

