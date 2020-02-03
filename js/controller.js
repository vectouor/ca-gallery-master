'use strict'

$(document).ready(init);

function init() {
    renderProjs();
}

function renderProjs() {

    var projs = getProjs();
    var strHTMLs = '';

    gProjs.map(proj => {
        strHTMLs +=
            `<div class="col-md-4 col-sm-6 portfolio-item" onclick="onProjItemClick('${proj.id}')">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"></i>
    </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
    </a>
    <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.title}</p>
    </div>
    </div>`
    });

    $('.project-container').html(strHTMLs);
}

function onProjItemClick(projId) {
    var proj = getProjById(projId);

    $('.modal-proj-name').text(proj.name);
    $('.modal-proj-date').text(timestempToDate(proj.publishedAt));
    $('.modal-proj-client').text(" ");
    $('.modal-proj-category').text(proj.labels)
    $('.modal-pic').attr('src', `img/portfolio/${proj.id}-full.jpg`)
    $('.link-to-proj').attr('href', `${proj.url}`)
}