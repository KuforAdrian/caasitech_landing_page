
document.addEventListener("DOMContentLoaded", function() {

        window.addEventListener("scroll", function() {
            const navbar = document.querySelector(".navbar");
            const scrollPosition = window.scrollY;
            const element = document.querySelector(".counting");
            const position = element.getBoundingClientRect();


            //get screen height size
            const screenHeight = window.innerHeight;
        
            if(position.top >= 0 && position.bottom <= screenHeight){
                $(".counting").each(function(){
                    var $this = $(this);
                    let countTo = $this.attr('data-count');

                    $({countNum: $this.text()}).animate(
                        {
                            countNum: countTo
                        },
                        {
                            duration: 3000,
                            easing: 'linear',
                            step: function(){
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function(){
                                $this.text(
                                    Math.floor(this.countNum).toLocaleString()
                                );
                            },
                        }
                    );
                });
            }

        });
});