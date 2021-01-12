var draw = Chart.controllers.doughnut.prototype.draw;
Chart.controllers.doughnut = Chart.controllers.doughnut.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _fill = ctx.fill;
        ctx.fill = function() {
            ctx.save();
            _fill.apply(this, arguments)
            ctx.restore();
        }
    }
});


function chartCustom(class_item, val01, val02) {
    var ctx = $(class_item).find('.myChart')[0].getContext('2d');
    var position01 = $(class_item).find('.content').offset().top - 900;
    var flag01 = null;
    $(window).scroll(function() {
        if ($(this).scrollTop() > position01 && flag01 === null) {
            flag01 = 1;
            //Draw canvas
            var myPieChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['女性', '男性'],
                    datasets: [{
                        backgroundColor: ['#22a2a2', '#008177'],
                        borderColor: ['#22a2a2', '#008177'],
                        data: [val01, val02],
                        borderAlign: 'center',
                        boxShadow: false,
                    }]
                },
                options: {
                    easing: 'easeInOutElastic',
                    legend: {
                        display: false,
                    },
                    cutoutPercentage: 83,
                    responsive: true,
                    maintainAspectRatio: false,
                    segmentShowStroke: true,
                    tooltips: {
                        // Disable the on-canvas tooltip
                        enabled: false,
                    },
                    animation: {
                        duration: 4000 // delay of 500 ms after the canvas is considered inside the viewport

                    },
                    setTimeout: 2000,
                }

            });
            $(class_item).find('.img').css("visibility", "visible");
        }
    });
}