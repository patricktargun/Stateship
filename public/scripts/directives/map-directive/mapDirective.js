(function() {
	"use strict";

	angular
		.module('mapDirective', [])
		.directive('mapArea', function mapDirective(){
			return {
				restrict: 'EA',
				templateUrl: '/scripts/directives/map-directive/map.html',
				link: function(scope, element, attr){
					var xref = {
					    AL: '',
					    AK: '',
					    AZ: '',
					    AR: '',
					    CA: '',
					    CO: '',
					    CT: '',
					    DE: '',
					    DC: '',
					    FL: '',
					    GA: '',
					    HI: '',
					    ID: '',
					    IL: '',
					    IN: '',
					    IA: '',
					    KS: '',
					    KY: '',
					    LA: '',
					    ME: '',
					    MD: '',
					    MA: '',
					    MI: '',
					    MN: '',
					    MS: '',
					    MO: '',
					    MT: '',
					    NE: '',
					    NV: '',
					    NH: '',
					    NJ: '',
					    NM: '',
					    NY: '',
					    NC: '',
					    ND: '',
					    OH: '',
					    OK: '',
					    OR: '',
					    PA: '',
					    RI: '',
					    SC: '',
					    SD: '',
					    TN: '',
					    TX: '',
					    UT: '',
					    VT: '',
					    VA: '',
					    WA: '',
					    WV: '',
					    WI: '',
					    WY: '',
					  };
					var image = $('#usa_image');
					var tooltip = $('.tooltip');
						image.mapster({
					    singleSelect: true,
					    mapKey: 'state',
					    listKey: 'name',
					    onClick: function (e) {
					      // update text depending on area selected
					      scope.getReps(e.key);
					      image.mapster('set_options', { 
					        areas: [{
					          key: e,
					        }]
					      });
					    },
					    showToolTip: false,
					    toolTipClose: ["tooltip-click", "area-click"],
					    render_highlight: {
					      fillColor: '858585',
					      stroke: false
					    },
					    scaleMap: true,
					    areas: [
					    {
					        key: 'AL',
					    },
					    {
					        key: 'AK',
					    },
					    {
					        key: 'AZ',
					    },
					    {
					        key: 'AR',
					    },
					    {
					        key: 'CA',
					    },
					    {
					        key: 'CO',
					    },
					    {
					        key: 'CT',
					    },
					    {
					        key: 'DE',
					    },
					    {
					        key: 'DC',
					    },
					    {
					        key: 'FL',
					    },
					    {
					        key: 'GA',
					    },
					    {
					        key: 'HI',
					    },
					    {
					        key: 'ID',
					    },
					    {
					        key: 'IL',
					    },
					    {
					        key: 'IN',
					    },
					    {
					        key: 'IA',
					    },
					    {
					        key: 'KS',
					    },
					    {
					        key: 'KY',
					    },
					    {
					        key: 'LA',
					    },
					    {
					        key: 'ME',
					    },
					    {
					        key: 'MD',
					    },
					    {
					        key: 'MA',
					    },
					    {
					        key: 'MI',
					    },
					    {
					        key: 'MN',
					    },
					    {
					        key: 'MS',
					    },
					    {
					        key: 'MO',
					    },
					    {
					        key: 'MT',
					    },
					    {
					        key: 'NE',
					    },
					    {
					        key: 'NV',
					    },
					    {
					        key: 'NH',
					    },
					    {
					        key: 'NJ',
					    },
					    {
					        key: 'NM',
					    },
					    {
					        key: 'NY',
					    },
					    {
					        key: 'NC',
					    },
					    {
					        key: 'ND',
					    },
					    {
					        key: 'OH',
					    },
					    {
					        key: 'OK',
					    },
					    {
					        key: 'OR',
					    },
					    {
					        key: 'PA',
					    },
					    {
					        key: 'RI',
					    },
					    {
					        key: 'SC',
					    },
					    {
					        key: 'SD',
					    },
					    {
					        key: 'TN',
					    },
					    {
					        key: 'TX',
					    },
					    {
					        key: 'UT',
					    },
					    {
					        key: 'VT',
					    },
					    {
					        key: 'VA',
					    },
					    {
					        key: 'WA',
					    },
					    {
					        key: 'WV',
					    },
					    {
					        key: 'WI',
					    },
					    {
					        key: 'WY',
					    }
					    ]
					});
				}
			}
		})

})();


