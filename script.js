var nb_st = 0;
var nbsst_1 = 0;
var nbsst_2 = 0;
var nbsst_3 = 0;
var nbsst_4 = 0;
var nbsst_5 = 0;
var nbsst_6 = 0;
var nbsst_7 = 0;
var nbsst_8 = 0;
var nbsst_9 = 0;
var nbsst_10 = 0;
var nbssst_1_1 = 0;
var nbssst_1_2 = 0;
var nbssst_1_3 = 0;
var nbssst_1_4 = 0;
var nbssst_1_5 = 0;
var nbssst_1_6 = 0;
var nbssst_1_7 = 0;
var nbssst_1_8 = 0;
var nbssst_1_9 = 0;
var nbssst_1_10 = 0;
var nbssst_2_1 = 0;
var nbssst_2_2 = 0;
var nbssst_2_3 = 0;
var nbssst_2_4 = 0;
var nbssst_2_5 = 0;
var nbssst_2_6 = 0;
var nbssst_2_7 = 0;
var nbssst_2_8 = 0;
var nbssst_2_9 = 0;
var nbssst_2_10 = 0;
var nbssst_3_1 = 0;
var nbssst_3_2 = 0;
var nbssst_3_3 = 0;
var nbssst_3_4 = 0;
var nbssst_3_5 = 0;
var nbssst_3_6 = 0;
var nbssst_3_7 = 0;
var nbssst_3_8 = 0;
var nbssst_3_9 = 0;
var nbssst_3_10 = 0;
var nbssst_4_1 = 0;
var nbssst_4_2 = 0;
var nbssst_4_3 = 0;
var nbssst_4_4 = 0;
var nbssst_4_5 = 0;
var nbssst_4_6 = 0;
var nbssst_4_7 = 0;
var nbssst_4_8 = 0;
var nbssst_4_9 = 0;
var nbssst_4_10 = 0;
var nbssst_5_1 = 0;
var nbssst_5_2 = 0;
var nbssst_5_3 = 0;
var nbssst_5_4 = 0;
var nbssst_5_5 = 0;
var nbssst_5_6 = 0;
var nbssst_5_7 = 0;
var nbssst_5_8 = 0;
var nbssst_5_9 = 0;
var nbssst_5_10 = 0;
var nbssst_6_1 = 0;
var nbssst_6_2 = 0;
var nbssst_6_3 = 0;
var nbssst_6_4 = 0;
var nbssst_6_5 = 0;
var nbssst_6_6 = 0;
var nbssst_6_7 = 0;
var nbssst_6_8 = 0;
var nbssst_6_9 = 0;
var nbssst_6_10 = 0;
var nbssst_7_1 = 0;
var nbssst_7_2 = 0;
var nbssst_7_3 = 0;
var nbssst_7_4 = 0;
var nbssst_7_5 = 0;
var nbssst_7_6 = 0;
var nbssst_7_7 = 0;
var nbssst_7_8 = 0;
var nbssst_7_9 = 0;
var nbssst_7_10 = 0;
var nbssst_8_1 = 0;
var nbssst_8_2 = 0;
var nbssst_8_3 = 0;
var nbssst_8_4 = 0;
var nbssst_8_5 = 0;
var nbssst_8_6 = 0;
var nbssst_8_7 = 0;
var nbssst_8_8 = 0;
var nbssst_8_9 = 0;
var nbssst_8_10 = 0;
var nbssst_9_1 = 0;
var nbssst_9_2 = 0;
var nbssst_9_3 = 0;
var nbssst_9_4 = 0;
var nbssst_9_5 = 0;
var nbssst_9_6 = 0;
var nbssst_9_7 = 0;
var nbssst_9_8 = 0;
var nbssst_9_9 = 0;
var nbssst_9_10 = 0;
var nbssst_10_1 = 0;
var nbssst_10_2 = 0;
var nbssst_10_3 = 0;
var nbssst_10_4 = 0;
var nbssst_10_5 = 0;
var nbssst_10_6 = 0;
var nbssst_10_7 = 0;
var nbssst_10_8 = 0;
var nbssst_10_9 = 0;
var nbssst_10_10 = 0;


if (nb_st > 0) {
  document.getElementById("+st").hide();
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("titre_kw").value = "";
  document.getElementById("article_pos").value = "";
  document.getElementById("titre").value = "";
  document.getElementById("text_titre").value = "";
  document.getElementById("result").value = "";
  });



function AddSubTitle() {
  nb_st = nb_st + 1;
  var new_SubTitle = "<div id='st" + nb_st + "' style='background-color: #c39bd3; margin:25px; padding:15px;'> <label for='stitre" + nb_st + "'>Sous titre </label> : <input type='text' name='stitre" + nb_st + "' id='stitre" + nb_st +
   "' style='width:400px;'/> <br> <label for='stitre" + nb_st + "_kw'>Mots clés du sous titre</label> : <input type='text' name='stitre" + nb_st + "_kw' id='stitre" + nb_st +
    "_kw' style='width:900px;' /> <br> <textarea name='text_stitre" + nb_st + "' id='text_stitre" + nb_st + "' rows='5' cols='50'></textarea> <br> <div id='dsst" + nb_st + "'> </div> " +
    "<input type='button' name='+sstitre' value='Ajouter un sous sous titre' id='+sstitre' onclick='AddSsubTitle(this.parentNode);'> <br><br> </div>";
  document.getElementById("dst").innerHTML = document.getElementById("dst").innerHTML + new_SubTitle;
};




function AddSsubTitle(elmt) {
  var ide = elmt.id;
  var st_pos = (ide.toString()).slice(-1);
  if (st_pos == 0)
  {
    st_pos = (ide.toString()).slice(-2);
  }
  var sst_pos;
  switch (st_pos) {
    case '1':
      nbsst_1 = nbsst_1 + 1;
      sst_pos = nbsst_1;
      break;
    case '2':
      nbsst_2 = nbsst_2 + 1;
      sst_pos = nbsst_2;
      break;
    case '3':
      nbsst_3 = nbsst_3 + 1;
      sst_pos = nbsst_3;
      break;
    case '4':
      nbsst_4 = nbsst_4 + 1;
      sst_pos = nbsst_4;
      break;
    case '5':
      nbsst_5 = nbsst_5 + 1;
      sst_pos = nbsst_5;
      break;
    case '6':
      nbsst_6 = nbsst_6 + 1;
      sst_pos = nbsst_6;
      break;
    case '7':
      nbsst_7 = nbsst_7 + 1;
      sst_pos = nbsst_7;
      break;
    case '8':
      nbsst_8 = nbsst_8 + 1;
      sst_pos = nbsst_8;
      break;
    case '9':
      nbsst_9 = nbsst_9 + 1;
      sst_pos = nbsst_9;
      break;
    case '10':
      nbsst_10 = nbsst_10 + 1;
      sst_pos = nbsst_10;
      break;
  }
  var new_SsubTitle = "<div id='sst" + st_pos + "_" + sst_pos + "' style='background-color: #f8c471; margin:25px; padding:15px;'> <label for='sstitre" + st_pos + "_" + sst_pos + "'>Sous sous titre </label> : <input type='text' name='sstitre" + st_pos + "_" + sst_pos + "' id='sstitre" + st_pos + "_" + sst_pos +
   "' style='width:400px;' /> <br> <label for='sstitre" + nb_st + "_" + sst_pos + "_kw'>Mots clés du sous sous titre</label> : <input type='text' name='sstitre" + st_pos + "_" + sst_pos + "_kw' id='sstitre" + st_pos + "_" + sst_pos +
    "_kw' style='width:900px;' /> <br> <textarea name='text_sstitre" + st_pos + "_" + sst_pos + "' id='text_sstitre" + st_pos + "_" + sst_pos + "' rows='5' cols='50'></textarea> <br> <div id='dssst" + st_pos + "_" + sst_pos + "'> </div> " +
    "<input type='button' name='+ssstitre' value='Ajouter un sous sous sous titre' id='+ssstitre' onclick='AddSssubTitle(this.parentNode);'> <br><br> </div>";
  document.getElementById("dsst" + st_pos).innerHTML = document.getElementById("dsst"+ st_pos).innerHTML + new_SsubTitle;
};






function AddSssubTitle(elmt) {
  var ide = elmt.id;
  var st_pos;
  var sst_pos = (ide.toString()).slice(-1);
  if (sst_pos == 0)
  {
    sst_pos = (ide.toString()).slice(-2);
    st_pos = ((ide.toString()).slice(-4)).substr(0, 1);
    if (st_pos == 0)
    {
      st_pos = ((ide.toString()).slice(-5)).slice(2);
    }
  }
  else {
    st_pos = ((ide.toString()).slice(-3)).substr(0, 1);
    if (st_pos == 0)
    {
      st_pos = ((ide.toString()).slice(-4)).slice(2);
    }
  }
  var ssst_pos = 0;
  switch (st_pos) {
    case '1':
      switch (sst_pos) {
        case '1':
          nbssst_1_1 = nbssst_1_1 + 1;
          ssst_pos = nbssst_1_1;
          break;
        case '2':
          nbssst_1_2 = nbssst_1_2 + 1;
          ssst_pos = nbssst_1_2;
          break;
        case '3':
          nbssst_1_3 = nbssst_1_3 + 1;
          ssst_pos = nbssst_1_3;
          break;
        case '4':
          nbssst_1_4 = nbssst_1_4 + 1;
          ssst_pos = nbssst_1_4;
          break;
        case '5':
          nbssst_1_5 = nbssst_1_5 + 1;
          ssst_pos = nbssst_1_5;
          break;
        case '6':
          nbssst_1_6 = nbssst_1_6 + 1;
          ssst_pos = nbssst_1_6;
          break;
        case '7':
          nbssst_1_7 = nbssst_1_7 + 1;
          ssst_pos = nbssst_1_7;
          break;
        case '8':
          nbssst_1_8 = nbssst_1_8 + 1;
          ssst_pos = nbssst_1_8;
          break;
        case '9':
          nbssst_1_9 = nbssst_1_9 + 1;
          ssst_pos = nbssst_1_9;
        case '10':
          nbssst_1_10 = nbssst_1_10 + 1;
          ssst_pos = nbssst_1_10;
          break;
      }
      break;
    case '2':
      switch (sst_pos) {
        case '1':
          nbssst_2_1 = nbssst_2_1 + 1;
          ssst_pos = nbssst_2_1;
          break;
        case '2':
          nbssst_2_2 = nbssst_2_2 + 1;
          ssst_pos = nbssst_2_2;
          break;
        case '3':
          nbssst_2_3 = nbssst_2_3 + 1;
          ssst_pos = nbssst_2_3;
          break;
        case '4':
          nbssst_2_4 = nbssst_2_4 + 1;
          ssst_pos = nbssst_2_4;
          break;
        case '5':
          nbssst_2_5 = nbssst_2_5 + 1;
          ssst_pos = nbssst_2_5;
          break;
        case '6':
          nbssst_2_6 = nbssst_2_6 + 1;
          ssst_pos = nbssst_2_6;
          break;
        case '7':
          nbssst_2_7 = nbssst_2_7 + 1;
          ssst_pos = nbssst_2_7;
          break;
        case '8':
          nbssst_2_8 = nbssst_2_8 + 1;
          ssst_pos = nbssst_2_8;
          break;
        case '9':
          nbssst_2_9 = nbssst_2_9 + 1;
          ssst_pos = nbssst_2_9;
        case '10':
          nbssst_2_10 = nbssst_2_10 + 1;
          ssst_pos = nbssst_2_10;
          break;
      }
      break;
    case '3':
      switch (sst_pos) {
        case '1':
          nbssst_3_1 = nbssst_3_1 + 1;
          ssst_pos = nbssst_3_1;
          break;
        case '2':
          nbssst_3_2 = nbssst_3_2 + 1;
          ssst_pos = nbssst_3_2;
          break;
        case '3':
          nbssst_3_3 = nbssst_3_3 + 1;
          ssst_pos = nbssst_3_3;
          break;
        case '4':
          nbssst_3_4 = nbssst_3_4 + 1;
          ssst_pos = nbssst_3_4;
          break;
        case '5':
          nbssst_3_5 = nbssst_3_5 + 1;
          ssst_pos = nbssst_3_5;
          break;
        case '6':
          nbssst_3_6 = nbssst_3_6 + 1;
          ssst_pos = nbssst_3_6;
          break;
        case '7':
          nbssst_3_7 = nbssst_3_7 + 1;
          ssst_pos = nbssst_3_7;
          break;
        case '8':
          nbssst_3_8 = nbssst_3_8 + 1;
          ssst_pos = nbssst_3_8;
          break;
        case '9':
          nbssst_3_9 = nbssst_3_9 + 1;
          ssst_pos = nbssst_3_9;
        case '10':
          nbssst_3_10 = nbssst_3_10 + 1;
          ssst_pos = nbssst_3_10;
          break;
      }
      break;
    case '4':
      switch (sst_pos) {
        case '1':
          nbssst_4_1 = nbssst_4_1 + 1;
          ssst_pos = nbssst_4_1;
          break;
        case '2':
          nbssst_4_2 = nbssst_4_2 + 1;
          ssst_pos = nbssst_4_2;
          break;
        case '3':
          nbssst_4_3 = nbssst_4_3 + 1;
          ssst_pos = nbssst_4_3;
          break;
        case '4':
          nbssst_4_4 = nbssst_4_4 + 1;
          ssst_pos = nbssst_4_4;
          break;
        case '5':
          nbssst_4_5 = nbssst_4_5 + 1;
          ssst_pos = nbssst_4_5;
          break;
        case '6':
          nbssst_4_6 = nbssst_4_6 + 1;
          ssst_pos = nbssst_4_6;
          break;
        case '7':
          nbssst_4_7 = nbssst_4_7 + 1;
          ssst_pos = nbssst_4_7;
          break;
        case '8':
          nbssst_4_8 = nbssst_4_8 + 1;
          ssst_pos = nbssst_4_8;
          break;
        case '9':
          nbssst_4_9 = nbssst_4_9 + 1;
          ssst_pos = nbssst_4_9;
        case '10':
          nbssst_4_10 = nbssst_4_10 + 1;
          ssst_pos = nbssst_4_10;
          break;
      }
      break;
    case '5':
      switch (sst_pos) {
        case '1':
          nbssst_5_1 = nbssst_5_1 + 1;
          ssst_pos = nbssst_5_1;
          break;
        case '2':
          nbssst_5_2 = nbssst_5_2 + 1;
          ssst_pos = nbssst_5_2;
          break;
        case '3':
          nbssst_5_3 = nbssst_5_3 + 1;
          ssst_pos = nbssst_5_3;
          break;
        case '4':
          nbssst_5_4 = nbssst_5_4 + 1;
          ssst_pos = nbssst_5_4;
          break;
        case '5':
          nbssst_5_5 = nbssst_5_5 + 1;
          ssst_pos = nbssst_5_5;
          break;
        case '6':
          nbssst_5_6 = nbssst_5_6 + 1;
          ssst_pos = nbssst_5_6;
          break;
        case '7':
          nbssst_5_7 = nbssst_5_7 + 1;
          ssst_pos = nbssst_5_7;
          break;
        case '8':
          nbssst_5_8 = nbssst_5_8 + 1;
          ssst_pos = nbssst_5_8;
          break;
        case '9':
          nbssst_5_9 = nbssst_5_9 + 1;
          ssst_pos = nbssst_5_9;
        case '10':
          nbssst_5_10 = nbssst_5_10 + 1;
          ssst_pos = nbssst_5_10;
          break;
      }
      break;
    case '6':
      switch (sst_pos) {
        case '1':
          nbssst_6_1 = nbssst_6_1 + 1;
          ssst_pos = nbssst_6_1;
          break;
        case '2':
          nbssst_6_2 = nbssst_6_2 + 1;
          ssst_pos = nbssst_6_2;
          break;
        case '3':
          nbssst_6_3 = nbssst_6_3 + 1;
          ssst_pos = nbssst_6_3;
          break;
        case '4':
          nbssst_6_4 = nbssst_6_4 + 1;
          ssst_pos = nbssst_6_4;
          break;
        case '5':
          nbssst_6_5 = nbssst_6_5 + 1;
          ssst_pos = nbssst_6_5;
          break;
        case '6':
          nbssst_6_6 = nbssst_6_6 + 1;
          ssst_pos = nbssst_6_6;
          break;
        case '7':
          nbssst_6_7 = nbssst_6_7 + 1;
          ssst_pos = nbssst_6_7;
          break;
        case '8':
          nbssst_6_8 = nbssst_6_8 + 1;
          ssst_pos = nbssst_6_8;
          break;
        case '9':
          nbssst_6_9 = nbssst_6_9 + 1;
          ssst_pos = nbssst_6_9;
        case '10':
          nbssst_6_10 = nbssst_6_10 + 1;
          ssst_pos = nbssst_6_10;
          break;
      }
      break;
    case '7':
      switch (sst_pos) {
        case '1':
          nbssst_7_1 = nbssst_7_1 + 1;
          ssst_pos = nbssst_7_1;
          break;
        case '2':
          nbssst_7_2 = nbssst_7_2 + 1;
          ssst_pos = nbssst_7_2;
          break;
        case '3':
          nbssst_7_3 = nbssst_7_3 + 1;
          ssst_pos = nbssst_7_3;
          break;
        case '4':
          nbssst_7_4 = nbssst_7_4 + 1;
          ssst_pos = nbssst_7_4;
          break;
        case '5':
          nbssst_7_5 = nbssst_7_5 + 1;
          ssst_pos = nbssst_7_5;
          break;
        case '6':
          nbssst_7_6 = nbssst_7_6 + 1;
          ssst_pos = nbssst_7_6;
          break;
        case '7':
          nbssst_7_7 = nbssst_7_7 + 1;
          ssst_pos = nbssst_7_7;
          break;
        case '8':
          nbssst_7_8 = nbssst_7_8 + 1;
          ssst_pos = nbssst_7_8;
          break;
        case '9':
          nbssst_7_9 = nbssst_7_9 + 1;
          ssst_pos = nbssst_7_9;
        case '10':
          nbssst_7_10 = nbssst_7_10 + 1;
          ssst_pos = nbssst_7_10;
          break;
      }
      break;
    case '8':
      switch (sst_pos) {
        case '1':
          nbssst_8_1 = nbssst_8_1 + 1;
          ssst_pos = nbssst_8_1;
          break;
        case '2':
          nbssst_8_2 = nbssst_8_2 + 1;
          ssst_pos = nbssst_8_2;
          break;
        case '3':
          nbssst_8_3 = nbssst_8_3 + 1;
          ssst_pos = nbssst_8_3;
          break;
        case '4':
          nbssst_8_4 = nbssst_8_4 + 1;
          ssst_pos = nbssst_8_4;
          break;
        case '5':
          nbssst_8_5 = nbssst_8_5 + 1;
          ssst_pos = nbssst_8_5;
          break;
        case '6':
          nbssst_8_6 = nbssst_8_6 + 1;
          ssst_pos = nbssst_8_6;
          break;
        case '7':
          nbssst_8_7 = nbssst_8_7 + 1;
          ssst_pos = nbssst_8_7;
          break;
        case '8':
          nbssst_8_8 = nbssst_8_8 + 1;
          ssst_pos = nbssst_8_8;
          break;
        case '9':
          nbssst_8_9 = nbssst_8_9 + 1;
          ssst_pos = nbssst_8_9;
        case '10':
          nbssst_8_10 = nbssst_8_10 + 1;
          ssst_pos = nbssst_8_10;
          break;
      }
      break;
    case '9':
      switch (sst_pos) {
        case '1':
          nbssst_9_1 = nbssst_9_1 + 1;
          ssst_pos = nbssst_9_1;
          break;
        case '2':
          nbssst_9_2 = nbssst_9_2 + 1;
          ssst_pos = nbssst_9_2;
          break;
        case '3':
          nbssst_9_3 = nbssst_9_3 + 1;
          ssst_pos = nbssst_9_3;
          break;
        case '4':
          nbssst_9_4 = nbssst_9_4 + 1;
          ssst_pos = nbssst_9_4;
          break;
        case '5':
          nbssst_9_5 = nbssst_9_5 + 1;
          ssst_pos = nbssst_9_5;
          break;
        case '6':
          nbssst_9_6 = nbssst_9_6 + 1;
          ssst_pos = nbssst_9_6;
          break;
        case '7':
          nbssst_9_7 = nbssst_9_7 + 1;
          ssst_pos = nbssst_9_7;
          break;
        case '8':
          nbssst_9_8 = nbssst_9_8 + 1;
          ssst_pos = nbssst_9_8;
          break;
        case '9':
          nbssst_9_9 = nbssst_9_9 + 1;
          ssst_pos = nbssst_9_9;
        case '10':
          nbssst_9_10 = nbssst_9_10 + 1;
          ssst_pos = nbssst_9_10;
          break;
      }
      break;
    case '10':
      switch (sst_pos) {
        case '1':
          nbssst_10_1 = nbssst_10_1 + 1;
          ssst_pos = nbssst_10_1;
          break;
        case '2':
          nbssst_10_2 = nbssst_10_2 + 1;
          ssst_pos = nbssst_10_2;
          break;
        case '3':
          nbssst_10_3 = nbssst_10_3 + 1;
          ssst_pos = nbssst_10_3;
          break;
        case '4':
          nbssst_10_4 = nbssst_10_4 + 1;
          ssst_pos = nbssst_10_4;
          break;
        case '5':
          nbssst_10_5 = nbssst_10_5 + 1;
          ssst_pos = nbssst_10_5;
          break;
        case '6':
          nbssst_10_6 = nbssst_10_6 + 1;
          ssst_pos = nbssst_10_6;
          break;
        case '7':
          nbssst_10_7 = nbssst_10_7 + 1;
          ssst_pos = nbssst_10_7;
          break;
        case '8':
          nbssst_10_8 = nbssst_10_8 + 1;
          ssst_pos = nbssst_10_8;
          break;
        case '9':
          nbssst_10_9 = nbssst_10_9 + 1;
          ssst_pos = nbssst_10_9;
        case '10':
          nbssst_10_10 = nbssst_10_10 + 1;
          ssst_pos = nbssst_10_10;
          break;
      }
      break;
  }
  var new_SssubTitle = "<div id='ssst" + st_pos + "_" + sst_pos + "_" + ssst_pos + "' style='background-color: #76d7c4; margin:25px; padding:15px; padding:15px;'> <label for='ssstitre" + st_pos + "_" + sst_pos + "_" + ssst_pos + "'>Sous sous sous titre </label> : <input type='text' name='ssstitre" + st_pos + "_" + sst_pos + "_" + ssst_pos + "' id='ssstitre" + st_pos + "_" + sst_pos + "_" + ssst_pos +
   "' style='width:400px;' /> <br> <label for='ssstitre" + st_pos + "_" + sst_pos + "_" + ssst_pos + "_kw'>Mots clés du sous sous sous titre</label> : <input type='text' name='ssstitre" + st_pos + "_" + sst_pos + "_" + ssst_pos + "_kw' id='ssstitre" + st_pos + "_" + sst_pos + "_" + ssst_pos +
    "_kw' style='width:900px;' /> <br> <textarea name='text_ssstitre" + st_pos + "_" + sst_pos + "_" + ssst_pos + "' id='text_ssstitre" + st_pos + "_" + sst_pos + "_" + ssst_pos + "' rows='5' cols='50'></textarea> <br> ";
  document.getElementById("dssst" + st_pos + "_" + sst_pos).innerHTML = document.getElementById("dssst"+ st_pos + "_" + sst_pos).innerHTML + new_SssubTitle;
};



function Validate() {

  var code;
  var input;

  var nb_sst;
  var nb_ssst;

  code = "<article class='container ";
  input = document.getElementById("titre_kw").value;
  code = code + input + "'> \n\n <h3 class='st1' id='a";
  input = document.getElementById("article_pos").value;
  code = code + input + "'>";
  input = document.getElementById("titre").value;
  code = code + input + "</h3> \n\n <div class='dh3'> \n";
  input = document.getElementById("text_titre").value;
  code = code + input + "\n </div> \n\n ";


  for (var i = 1 ; i <= nb_st ; i++)
  {
    nb_sst = 0;
    input = document.getElementById("stitre" + i + "_kw").value;
    code = code + "<div class='" + input + "'> \n\n <h4 class='st2' id='a";
    input = document.getElementById("article_pos").value;
    code = code + input + "st" + i + "'>";
    input = document.getElementById("stitre" + i).value;
    code = code + input + "</h4> \n\n <div class='dh4'> \n";
    input = document.getElementById("text_stitre" + i).value;
    code = code + input + "\n </div> \n\n  ";


    switch (i) {
      case 1:
        nb_sst = nbsst_1;
        break;
      case 2:
        nb_sst = nbsst_2;
        break;
      case 3:
        nb_sst = nbsst_3;
        break;
      case 4:
        nb_sst = nbsst_4;
        break;
      case 5:
        nb_sst = nbsst_5;
        break;
      case 6:
        nb_sst = nbsst_6;
        break;
      case 7:
        nb_sst = nbsst_7;
        break;
      case 8:
        nb_sst = nbsst_8;
        break;
      case 9:
        nb_sst = nbsst_9;
        break;
      case 10:
        nb_sst = nbsst_10;
        break;
    }


    for (var j = 1 ; j <= nb_sst ; j++)
    {
      input = document.getElementById("sstitre" + i + "_" + j + "_kw").value;
      code = code + "<div class='" + input + "'> \n\n <h5 class='st3' id='a";
      input = document.getElementById("article_pos").value;
      code = code + input + "st" + i + "sst" + j + "'> \n <div class='dh5'>";
      input = document.getElementById("sstitre" + i + "_" + j).value;
      code = code + input + "</h5> \n\n";
      input = document.getElementById("text_sstitre" + i + "_" + j).value;
      code = code + input + "\n </div> \n\n";
    }//fin boucle for j (nb_sst)
    code = code + " \n </div> \n";

  } //fin boucle for i (nb_st)
  code = code + " \n </div> \n </article>";

  document.getElementById("result").value = code;

};
