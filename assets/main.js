$("[data-toggled-by]").addClass('hide');

$("[data-toggle]").on("click", function(){
	var $toToggle = $("[data-toggled-by]");
	var $toggle = $(this);
	var toggleValue = $toggle.attr("data-toggle");

	$toToggle.each(function(){
		var $this = $(this);
		var toToggleValue = $this.attr("data-toggled-by");
		if (toggleValue === toToggleValue) {
			if ($this.hasClass('hide')) {
				$this.removeClass('hide');
				$this.addClass('show')
				$toggle.text('Hide details');
			} else {
				$this.removeClass('show');
				$this.addClass('hide');
				$toggle.text('Show details');
			}
		}
	})
});