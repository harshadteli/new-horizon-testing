const LS_KEY='nh_payment_upload_v2';
const st=JSON.parse(localStorage.getItem(LS_KEY)||"{}");
if(st.uploaded){
  document.getElementById('showUser').textContent=st.name;
  document.getElementById('successPreview').src=st.imageData;
  //document.getElementById('txId').textContent=st.txId;
  document.getElementById('submittedAt').textContent=st.timePretty;
}else{
  window.location.href="../qrcode.html";
}