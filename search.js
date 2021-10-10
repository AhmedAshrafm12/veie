



$('#ser').click(function(e){
    e.preventDefault();
    $('.pop').fadeIn()
   })

   
 

inter=["قسم النصائح"," قسم المواهب","فرص عمل","اتحاد الطلاب","كورسات اخرى","كورسات هندسيه","داتا الاقسام","برامج هندسيه"," ","index.html"];
Data=["اعدادي","مدني","نظم ومعلومات","كهربا","تعدين وبترول","تخطيط","ميكانيكا","عماره","  -  داتا الاقسام","ED.html"];
Edady=["رياضة اعدادي","فيزياء اعدادي","رسم هندسي اعداي","وصفية اعداي","English"," حاسب الي","تطور تكنولوجي","كيمياء اعدادي","المواد الشرعيه","انتاج اعدادي","ميكانيكا اعدادي","  - اعداداي ","Edady.html"]
fmath=["دوال","تفاضل","كسور جزيئية","النهايات","دوال مثلثية","كتاب رياضة اعداداي ترم اول","  -  رياضة ترم اول اعدادي","math.html"]
fmathl=["https://drive.google.com/drive/folders/10Z3_WAVErfbZPbZ1i2ge0xE6OX3fcI8i","https://drive.google.com/drive/folders/10feJCz4msU5th9yoVZrP68YZtiHhc9Rg","https://drive.google.com/drive/folders/1kPXfItqPrEgY1L-eMxUWYrEJLZli2Pmc","https://drive.google.com/drive/folders/10cV5o5QgpATCvt_rv0Z3FzzQkKd8RQsx","https://drive.google.com/drive/folders/1tIHHUJSuyFpMG4LaVHCPz90sDGLhSzJZ","https://drive.google.com/open?id=1oup2_0Qrtop7bEfVAvFqMTcIxl-82rIl"];
smath=["قطاعات مخروطية","كتاب رياضة اعدادي ترم تاني","تكامل كسور جزيئية","مفكوك مكلورين","التكامل","مصفوفات","  -  وصفية اعدادي","math.html"];
smathl=["https://drive.google.com/drive/folders/1Go-Br0Utdm7S0v_n_UszXDJkqJ7FqfHT","https://drive.google.com/open?id=1oup2_0Qrtop7bEfVAvFqMTcIxl-82rIl","https://drive.google.com/drive/folders/1WUeqvR-EJ2ZUxnkiAe1fIkGuDxxEXrTS","https://drive.google.com/open?id=1W2JIWCAUEnQrILy6UgALlwSZOfK6UM9M","https://drive.google.com/open?id=1g8mvh8itvzFe8b6qRe_bsTztK7c9PIxs","https://drive.google.com/open?id=1nusMSFeJ7ZlSAP06oRnDOFLEo31-zLkh"]
wless=["النقطة وصقية","مستقيم","مستوى وصفية","تالف ودوران وصفية","موضع وقياس وصفية","كثيرات سطوح وصفية","كرة وصفية","مخروط وصفية","دائرة وصفية","اسطوانة وصفية","العمليات الاساسية وصفية","ملخصات وصفية","  -  اعدادي","wasf.html"];
wlessl=["  https://drive.google.com/drive/folders/109g0NZlUqZgVhRcBaRP6yW-v4EO73iNw","https://drive.google.com/drive/folders/10HlV1EYBKNCDz7AVb6OOAWbowUp5ynNI"," https://drive.google.com/drive/folders/10JWiWJInRHrHSGUGoxu_KQS2KjnQMjwO","   https://drive.google.com/open?id=1Iw4eqtMurU5WmbUGX6UTbjC3Y4Bjbosc","  https://drive.google.com/drive/folders/10KphyP_aSYc6c0TBzPG-Q1kSyF4YRpL0"," https://drive.google.com/drive/folders/10N1AOcZJrkzYSvVLYgjhwu9I3PKUyKPi "," https://drive.google.com/drive/folders/1-q_-fm5wQSpr09hr4vNIDHC17kdurRxz"," https://drive.google.com/drive/folders/11etsOGg285WvsmCWVIH2l-Msgf6LN3tC"," https://drive.google.com/drive/folders/10nalrO6TH6KtAKqpUIpeUI1lcjBHso3D"," https://drive.google.com/drive/folders/10Nm6CW4-40XUJX3ZrbC2OXGIjDLJdeeo","  https://drive.google.com/drive/folders/1sv6d5OiqJb_GJl1t50FKZkYwl1mxLmwQ","https://drive.google.com/drive/folders/10OUcH9bj81bS6xA4Kkz1WMtavqiivFfO","  -  اعدادي","wasf.html"];
search=[inter,Data,Edady,fmath,smath,wless];
links=[inter,Data,Edady,fmathl,smathl,wlessl];
var fo=document.getElementById('for');
var dtl =document.createElement("datalist");
for(e of search){
for(s of e){
  var op= document.createElement('option');
  if(s!="ED.html" && s!="index.html" && s!="math.html" && s!="Edady.html" && s!="wasf.html"){
    op.innerHTML=s;
    dtl.appendChild(op);
  }

}
}
dtl.setAttribute('id','depa')
fo.appendChild(dtl)




function appen(a,t){
  var lin =document.createElement('a');
  lin.innerHTML=t;
 $('.pop').append(lin);
 $(lin).attr("href",a);
}
$("#ser").click(function(e){
  $("html,body").animate({
    scrollTop:0
})
$('.pop a').remove();
  var l=0;
e.preventDefault();
found=false;
for(ele of search){
  var c=0;
for(it of ele){
  s=it+ele[ele.length-2]
  if($('#sval').val()==it){
    found=true;
    if(ele==inter || ele==Data || ele==Edady ||it==wless){
    appen(ele[ele.length-1],s)
  }else{
  var x= links[l]
  appen(x[c],s)
  }}
c++;
} l++;
}
if(found==false){
  appen("#","لا توجد نتائج برجاء تحري الدقة او استخدام احد اقتراحات البحث")
}})



$('.pop').click(function(){ $('.pop').fadeOut()}
)