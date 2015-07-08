require.config({
	paths: {
		"jquery" : "./libs/jquery/jquery.min",
		"moment" : "./libs/moment/moment",
		"hugrid" : "./libs/hugrid/headsupgrid/hugrid"
	}
});

require(["jquery", "moment", "hugrid"], function($, moment, hugrid) {
	console.log(moment()._d);

	pageUnits = 'px';
	colUnits = 'px';
	pagewidth = 960;
	columns = 6;
	columnwidth = 140;
	gutterwidth = 24;
	pagetopmargin = 35;
	rowheight = 20;
	gridonload = 'off';
	makehugrid();
	setgridonload();
})