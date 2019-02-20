class Viewer {
  constructor(photo,photos) {
    this.photo = photo;
    this.photos = photos;
    this.slideIndex = 0;
  }

  openModal() {
    $('#myModal').show();
  }

  closeModal() {
    $('#myModal').hide();
  }

  plusSlides(n) {
    let current = this.photos.index(this.photo);
    if (current === this.photos.length) {
      n = 1;
    }
    this.slideIndex = this.photos.index(this.photo) + n;
    if (this.slideIndex >= this.photos.length) {
      this.slideIndex = 0;
    }
    this.showSlides(this.slideIndex);
  }

  showSlides(n) {
    let slide = $("#mySlide");
    this.photo = this.photos.get(n)
    slide.attr("src",this.photo.getAttribute("src"));
  }

}

let view = new Viewer();

$(".photo").click(function(e) {
  let photos = $(".photo");
  let x = photos.index($(this));
  view = new Viewer($(this),photos);
  view.openModal();
  view.showSlides(x);
})

$(".close").click(function() {
  view.closeModal()
});

$(".prev").click(function() {
  view.plusSlides(-1);
})

$(".next").click(function() {
  view.plusSlides(1);
})
