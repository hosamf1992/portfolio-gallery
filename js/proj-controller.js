'use strict'


function initPage() {
    renderPortfolios();


}



function renderPortfolios() {
    var proj = getProj();
    var $elPortItem = $('.portfolio-container').html();

    var strHtml = '';
    proj.forEach(function (proj) {

        strHtml += ' <div class="col-md-4 col-sm-6 portfolio-item">';
        strHtml += `<a data-id="${proj.id}" onclick="openModal(this)" class="portfolio-link" data-toggle="modal" href="#portfolioModal">`;
        strHtml += '  <div class="portfolio-hover">';
        strHtml += '  <div  class="portfolio-hover-content">';
        strHtml += '  <i class="fa fa-plus fa-3x"></i>';
        strHtml += ' </div>';
        strHtml += ' </div>';
        strHtml += `<img   class="img-fluid " src="${proj.url}">`;
        strHtml += '  </a>';
        strHtml += '  <div class="portfolio-caption">';
        strHtml += `<h4>${proj.name}</h4>`;
        strHtml += `<p class="text-muted">${proj.labels[0]}</p>`;
        strHtml += '</div>';
        strHtml += '</div>';

    });
    $elPortItem.html(strHtml);
   

}


function renderModal(id) {

    var proj = getProj();
    var projIdx = findProjById(id);

    var strHtml = '';
    // var elHtml = document.querySelector('.modal-container');
    var $elHtml=$('.modal-container');



    strHtml = `'<div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="close-modal" data-dismiss="modal">
      <div class="lr">
        <div class="rl"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="modal-body">
            <!-- Project Details Go Here -->
            <h2>${proj[projIdx].name}</h2>
            <p class="item-intro text-muted">${proj[projIdx].title}.</p>
            <img class="img-fluid d-block mx-auto" src="${proj[projIdx].url}" alt="">
            <p>${proj[projIdx].desc}</p>
            <ul class="list-inline">
              <li>Date: ${proj[projIdx].publishedAt}</li>
              <li>Client: ${proj[projIdx].labels[0]}</li>
              <li>Category: ${proj[projIdx].labels[1]}</li>
              <li><a href="${proj[projIdx].projLink}"  target="_blank">visit project</a></li>
            </ul>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>'`
        ;
    // elHtml.innerHTML = strHtml;
    $elHtml.html(strHtml);

    strHtml = '';

}

function openModal(el) {
    var id = el.dataset.id;
    console.log(id);
    renderModal(id);

}

function sendMail() {
    var $mailInput = $("#email").val();
    console.log($mailInput);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=hosamf1992@gmail.com&su=SUBJECT&body=BODY&bcc=${$mailInput}`, '_blank');

}