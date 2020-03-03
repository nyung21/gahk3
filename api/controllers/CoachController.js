/**
 * CoachController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  coachform: async function (req, res) {

    if (req.method == 'GET')
    {return res.view('membership/coachform', { 'data': req.session.data || {} });}
    req.session.data = req.body.Coach;
    return res.view('membership/coachformPreview', { 'data': req.session.data || {} });


  },

  coachformPreview: async function (req, res) {
    if (req.method == 'POST') {

      req.session.data = req.body.Coach;

      return res.view('coach/confirm', { 'data': req.session.data || {} });
    }

  },


  confirm: async function (req, res) {

    if (req.method == 'POST') {
      var coach = await Coach.create(req.session.data).fetch();

      req.session.data = {};  //clear data of session

      console.log(coach.Email);
      // var models = await User.find();
      var html = await sails.renderView('membership/Email3', { coach: coach, layout: false });
      await sails.helpers.sendSingleEmail({
        to: coach.Email,
        from: sails.config.custom.mailgunFrom,
        subject: '已收到閣下的申請表',
        html: html
      });



      return res.redirect('personal_login');
    }

  },
  personal_login: async function (req, res) {

    return res.view('membership/personal_login');

  },

  confirm_coach: async function (req, res) {
    var year = new Date().getFullYear();
    var pid = parseInt(req.params.id) || -1;
    var num = (year % 100) * 1000;
    var models = await Coach.find({ where: { CoachNo: { '>': num } }, sort: 'CoachNo DESC', limit: 1 });
    var model = models[0];
    if (models.length > 0) {
      var model = await Coach.update(pid).set({
        CoachNo: model.CoachNo + 1,
        comfirm_coach: '是',
      }).fetch();
    } else {

      model = await Coach.update(pid).set({
        CoachNo: num + 1,
        comfirm_coach: '是',
      }).fetch();
    }
    model = model[0];





    var html = await sails.renderView('membership/confirm_Coach', { models: model, layout: false });
    await sails.helpers.sendSingleEmail({
      to: '16228375@life.hkbu.edu.hk',
      from: sails.config.custom.mailgunFrom,
      subject: '已確認成為教練',
      html: html
    });


    return res.redirect('/coach/coach_record');

  },

  update_coach: async function (req, res) {


    var pid = parseInt(req.params.id) || -1;

    if (req.method == 'GET') {

      var model = await Coach.findOne(pid);

      if (model != null)
      {return res.view('membership/update_coach', { 'coach': model });}
      else
      {return res.send('No such coach!');}

    } else {

      var model = await Coach.findOne(pid);
      if (model.CheckNo != req.body.Coach.CheckNo) {
        var html = await sails.renderView('membership/check_email', { model: model, layout: false });
        await sails.helpers.sendSingleEmail({
          to: model.Email,
          from: sails.config.custom.mailgunFrom,
          subject: '已收到閣下的支票',
          html: html
        });
      }

      var models = await Coach.update(pid).set({

        CheckNo: req.body.Coach.CheckNo,
        New_coach: req.body.Coach.New_coach,
        Level: req.body.Coach.Level,
        Disciplines1: req.body.Coach.Disciplines1 || 'off',
        Disciplines2: req.body.Coach.Disciplines2 || 'off',
        Disciplines3: req.body.Coach.Disciplines3 || 'off',
        Disciplines4: req.body.Coach.Disciplines4 || 'off',
        Disciplines5: req.body.Coach.Disciplines5 || 'off',
        Disciplines6: req.body.Coach.Disciplines6 || 'off',
        Engname: req.body.Coach.Engname,
        ChiName: req.body.Coach.ChiName,
        Id: req.body.Coach.Id,
        Gender: req.body.Coach.Gender,
        Birthd: req.body.Coach.Birthd,
        Occupation: req.body.Coach.Occupation,
        Education: req.body.Coach.Education,
        Hnumber: req.body.Coach.Hnumber,
        Mnumber: req.body.Coach.Mnumber,
        Email: req.body.Coach.Email,
        ChiAddress: req.body.Coach.ChiAddress,
        HaveBeenCoach: req.body.Coach.HaveBeenCoach || 'off',
        HaveBeenCoach1:req.body.Coach.HaveBeenCoach1 || 'off',
        Have: req.body.Coach.Have,
        Have2: req.body.Coach.Have2,
        Qualification: req.body.Coach.Qualification || 'off',
        Cert_no: req.body.Coach.Cert_no,
        date_Qualification: req.body.Coach.date_Qualification,
        Qualification1: req.body.Coach.Qualification1|| 'off',
        Accredited_coachNo: req.body.Coach.Accredited_coachNo,
        date_Qualification1: req.body.Coach.date_Qualification1,
        Qualification2: req.body.Coach.Qualification2|| 'off',
        Cert_no2: req.body.Coach.Cert_no2,
        date_Qualification2: req.body.Coach.date_Qualification2,
        Qualification3: req.body.Coach.Qualification3|| 'off',
        Issued_by: req.body.Coach.Issued_by,
        date_Qualification3: req.body.Coach.date_Qualification3,
        Qualification4: req.body.Coach.Qualification4|| 'off',
        others: req.body.Coach.others,
        judges: req.body.Coach.judges,
        date_qualification5: req.body.Coach.date_qualification5,
        date_training: req.body.Coach.date_training,
        school_training: req.body.Coach.school_training,
        Discipline_training: req.body.Coach.Discipline_training,
        Badges_date: req.body.Coach.Badges_date,
        Badges_school: req.body.Coach.Badges_school,
        Badges_no: req.body.Coach.Badges_no,
        Activities_date: req.body.Coach.Activities_date,
        Activities_event: req.body.Coach.Activities_event,
        Activities_badges: req.body.Coach.Activities_badges,
        Coaching_workshops_date: req.body.Coach.Coaching_workshops_date,
        Coaching_workshops_event: req.body.Coach.Coaching_workshops_event,
        Coaching_workshops_organization: req.body.Coach.Coaching_workshops_organization,
        hope: req.body.Coach.hope,
        avatar_sign: req.body.Coach.avatar_sign,






      }).fetch();


      if(req.body.Coach.CheckNo!=''){
        models = await Coach.update(pid).set({
          check: '是',

        }).fetch();}



      if (models.length > 0)
      {return res.redirect('/coach/coach_record');}


      else
      {return res.send('No such coach!');}

    }

  },


  //show all coach record
  coach_record: async function (req, res) {


    var coach = await Coach.find();
    return res.view('membership/coach_record', { 'coach': coach });

  },






  csv: async function (req, res) {
    var csv = require('fast-csv');
    var arr = [];
    var models = await Coach.find();
    if (!models)
    {return res.notFound();}

    models.forEach(element => {
      arr.push({

        教練編號: 'INDC' + element.AtheleteNo,
        申請類別: element.New_coach,

        教練註冊級別: element.Level,

        男子競技體操: element.Disciplines1,
        女子競技體操 : element.Disciplines2,
        藝術體操: element.Disciplines3,
        技巧體操: element.Disciplines4,
        彈網: element.Disciplines5,
        健美體操: element.Disciplines6,

        英文名: element.Engname,
        中文名: element.ChiName,

        香港身份證號碼: element.Id,
        性別: element.Gender,
        出生日期: element.Birthd,

        職業: element.Occupation,
        學歷: element.Education,
        住宅: element.Hnumber,
        手提: element.Mnumber,
        電郵地址: element.Email,
        通訊地址: element.ChiAddress,

        //
        曾任教本會舉辦之課程: element.HaveBeenCoach,
        如有: element.Have,
        其他有關體操教學經驗:element.HaveBeenCoach1,
        請列明: element.Have2,

        //
        本會發出之體操教練證書: element.Qualification,
        證書編號: element.Cert_no,
        考取年份: element.date_Qualification,

        香港教練培訓委員會發出之證書: element.Qualification1,
        認可教練號碼: element.Accredited_coachNo,
        有效日期: element.date_Qualification1,
        //
        本會發出之教練理論課程證書: element.Qualification2,
        證書編號: element.Cert_no2,
        有效日期: element.date_Qualification2,


        急救證書: element.Qualification3,
        發出機構: element.Issued_by,
        考取年份: element.date_Qualification3,


        其他有關體操教練資歷: element.Qualification4,
        原因: element.others,
        是否已考取本地國際裁判資歷: element.judges,
        考取年份: element.date_qualification5,

        //

        曾於學校或其他地區教授之訓練班舉辦日期: element.date_training,
        學校機構名稱: element.school_training,
        教授項目: element.Discipline_training,


        曾教導學生考取章別計劃之數量舉辦日期: element.Badges_date,
        訓練班學校機構名稱: element.Badges_school,
        級別及數量: element.Badges_no,

        曾參與總會之體操推廣活動舉辦日期: element.Activities_date,
        活動名稱: element.Activities_event,
        負責職位: element.Activities_badges,

        曾參與總會及香港教練培訓委員會之複修課程舉辦日期: element.Coaching_workshops_date,
        活動名稱: element.Coaching_workshops_event,
        舉辦機構: element.Coaching_workshops_organization,
        聲明: element.hope,






      });

    });

    res.set('Content-type', 'text/csv');
    csv.write(arr, { headers: true }).pipe(res);
  },

  coachform_detail: async function (req, res) {

    var coach = await Coach.findOne(req.params.id);
    if (req.method == 'GET')
    {return res.view('membership/coachform_detail', { 'coach': coach, 'reg': 0 });}

  },




  canel_coach: async function (req, res) {
    var pid = parseInt(req.params.id) || -1;
    model = await Coach.update(pid).set({
      comfirm_coach: '否',

    }).fetch();

    return res.redirect('/coach/coach_record');


  },


};
