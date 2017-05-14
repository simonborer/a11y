$("[data-toggled-by]").addClass('hide');

$("[data-toggle]").on("click", function(){
	var $toToggle = $("[data-toggled-by]");
	var toggleValue = $(this).attr("data-toggle");

	$toToggle.each(function(){
		var $this = $(this);
		var toToggleValue = $this.attr("data-toggled-by");
		if (toggleValue === toToggleValue) {
			if ($this.hasClass('hide')) {
				$this.removeClass('hide');
				$this.addClass('show')
			} else {
				$this.removeClass('show');
				$this.addClass('hide');
			}
		}
	})
});