  jQuery(document).ready(function($) {
  // Edit Tooltip Text Here
  var xref = {
    AL: '<h3>Alabama</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>Need license for concealed handgun</li><li>Background check required for transfer of a firearm between private, unlicensed parties</li><li>Unlawful to carry rifles or shotgun walking canes</li><li>Open carry in a vehicle without a concealed carry license is prohibited</li><li>Stand Your Ground law</li></ul>',
    AK: '<h3>Alaska</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>No permit to carry</li><li>No background check required for transfer of a firearm between private, unlicensed parties</li><li>Federally licensed firearms dealers must initiate a background check on a purchaser</li><li>Castle Doctrine – No duty to retreat if in the home</li></ul>',
    AZ: '<h3>Arizona</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>No permit to openly carry</li><li>No permit to concealed carry for anyone 21 or older, who is not a prohibited possessor</li><li>No background check required for transfer of a firearm between private, unlicensed parties</li><li>Federally licensed firearms dealers must initiate a background check on a purchaser</li><li>Stand Your Ground law</li></ul>',
    AR: '<h3>Arkansas</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>License required for concealed carry</li><li>Open and concealed carry prohibited if the handgun is "readily available for use with a purpose to employ it as a weapon against a person."</li><li>No background check required for transfer of a firearm between private, unlicensed parties</li><li>Federally licensed firearms dealers must initiate a background check on a purchaser</li><li>No Stand Your Ground law or Castle Doctrine</li></ul>',
    CA: '<h3>California</h3><ul><li>Registration required for firearms capable of being concealed</li><li>No registration required for rifles or shotguns Handgun Safety Certificate required for handgun purchase</li><li>10-day waiting period prior to sale or transfer of firearms</li><li>Background check required</li><li>All gun sales must be processed through a licensed dealer</li><li>Permit required for concealed carry</li><li>Open carry (loaded or unloaded) unlawful in incorporated areas</li><li>Permit required to carry concealed handgun in a vehicle</li><li>Castle Doctrine</li></ul>',
    CO: '<h3>Colorado</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background check required</li><li>Stand Your Ground Law</li></ul>',
    CT: '<h3>Connecticut</h3><ul><li>No registration for handguns</li><li>registration required for "automatic weapons"</li><li>Permit required to purchase handguns</li><li>Two-week waiting period for purchase of rifles and shotguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>Permit required for open and concealed carry, and in vehicles</li><li>Background check required</li><li>Castle Doctrine</li></ul>',
    DE: '<h3>Delaware</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>No background check required for transfer of firearms between private parties</li><li>Background checks required by firearms dealers</li><li>Castle Doctrine</li></ul>',
    DC: '<h3>District of Columbia</h3><ul><li>Registration required for all firearms</li><li>No permit to purchase rifles, shotguns, or handguns; can only buy from a licensed dealer</li><li>Registration required to possess rifles, shotguns, or handguns</li><li>No license to carry is available; carrying is only allowed in a registrant\'s home or place of business, while being used for lawful recreational purposes, or being transported for a lawful purpose</li><li>Background checks are required for the registration certificate needed in the District</li><li>No Stand Your Ground law or Castle Doctrine</li></ul>',
    FL: '<h3>Florida</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>License required for concealed carry</li><li>Background checks required by firearms dealers</li><li>No background check required for transfer of firearms between private parties</li><li>Stand Your Ground law</li></ul>',
    GA: '<h3>Georgia</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>License required for concealed or open carry</li><li>Background checks required by firearms dealers; no background check required for transfer of firearms between private parties</li><li>Stand Your Ground law</li></ul>',
    HI: '<h3>Hawaii</h3><ul><li>Registration required for all firearms</li><li>Permit required to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>License required for concealed and open carry</li><li>Background check required to obtain a permit to purchase</li><li>Castle Doctrine</li></ul>',
    ID: '<h3>Idaho</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit to possess rifles, shotguns, or handguns</li><li>License required for concealed carry</li><li>No background check required for transfer of firearms by the state</li><li>Firearms dealers must initiate the background check required by federal law</li><li>Castle Doctrine</li></ul>',
    IL: '<h3>Illinois</h3><ul><li>No registration for firearms, except in Chicago</li><li>Firearms Owner\'s Identification Card (FOID) required to purchase rifles, shotguns, or handguns</li><li>Firearms Owner\'s Identification Card (FOID) required to possess rifles, shotguns, or handguns</li><li>Concealed carry is prohibited</li><li>Open carry is prohibited, with exceptions</li><li>Background checks required by firearms dealers</li><li>No background check required for transfer of firearms between private parties, except at gun shows</li><li>24-hour waiting period for purchasing long gun, 72-hour waiting period for handguns</li><li>Castle Doctrine</li></ul>',
    IN: '<h3>Indiana</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>License is required for carry of handguns</li><li>Background checks required by firearms dealers</li><li>No background check required for transfer of firearms between private parties</li><li>Stand Your Ground law</li></ul>',
    IA: '<h3>Iowa</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles and shotguns</li><li>Permit required to purchase handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Carrying a handgun is prohibited within limits of a city, with exceptions</li><li>Permit required for carrying a firearm</li><li>Background checks required for permits to purchase, acquire, and carry handguns</li><li>No Stand Your Ground law or Castle Doctrine</li></ul>',
    KS: '<h3>Kansas</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, and handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry; no prohibitions generally for open carry of a handgun</li><li>Background checks required by firearms dealers</li><li>No background check required for transfer of firearms between private parties</li><li>Castle Doctrine</li></ul>',
    KY: '<h3>Kentucky</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, and handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry; no prohibitions generally for open carry of a handgun</li><li>Background checks required federally by firearms dealers</li><li>No background check required for transfer of firearms between private parties</li><li>Stand Your Ground law</li></ul>',
    LA: '<h3>Louisiana</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, and handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry; no prohibitions generally for open carry of a handgun</li><li>Background checks required federally by firearms dealers</li><li>No background check required for transfer of firearms between private parties</li><li>Stand Your Ground law</li></ul>',
    ME: '<h3>Maine</h3><ul><li>No registration for firearms</li><li>No permit to purchase rifles, shotguns, and handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry; no prohibitions generally for open carry of a handgun</li><li>Background checks required federally by firearms dealers</li><li>No background check required for transfer of firearms between private parties</li><li>Castle Doctrine</li></ul>',
    MD: '<h3>Maryland</h3><ul><li>Registration required for handguns</li><li>No permit to purchase rifles, shotguns, and handguns; purchasers of regulated firearms must completed a certified firearms safety training course</li><li>Sales and transfers of firearms must be completed through a regulated firearms dealer</li><li>Can\'t buy more than one handgun or assault weapon within a 30-day period</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for carrying a handgun</li><li>Background checks required</li><li>Stand Your Ground law</li></ul>',
    MA: '<h3>Massachusetts</h3><ul><li>No registration for firearms</li><li>Proper card, license, or permit (depending on class of firearm) required for firearm purchases</li><li>Proper card, license, or permit (depending on class of firearm) required to possess firearms</li><li>Permit required for carrying of firearms</li><li>Background checks required for license prior to purchasing a firearm</li><li>Castle Doctrine</li></ul>',
    MI: '<h3>Michigan</h3><ul><li>Registration required for handguns</li><li>Permit required to purchase handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required; no background check required for transfer of long guns between private parties</li><li>Castle Doctrine</li></ul>',
    MN: '<h3>Minnesota</h3><ul><li>No registration required for firearms</li><li>Permit required to purchase handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer, for a transferee permit, and for a permit to carry a handgun</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
    MS: '<h3>Mississippi</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Stand Your Ground law</li></ul>',
    MO: '<h3>Missouri</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
    MT: '<h3>Montana</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>No prohibitions generally on open carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Stand Your Ground law</li></ul>',
    NE: '<h3>Nebraska</h3><ul><li>No registration required for firearms</li><li>Certificate required to purchase handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>Handgun purchasers through a private seller must first obtain a handgun certificate or a concealed handgun permit, which requires a background check</li><li>No Stand Your Ground law or Castle Doctrine</li></ul>',
    NV: '<h3>Nevada</h3><ul><li>No registration required for firearms, except in Clark County</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>No prohibitions generally on open carry</li><li>Background checks required for transfer of firearms</li><li>Stand Your Ground law</li></ul>',
    NH: '<h3>New Hampshire</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Stand Your Ground law</li></ul>',
    NJ: '<h3>New Jersey</h3><ul><li>No registration required for firearms, but police record of all handgun transfers required</li><li>Must have Firearms Purchasers Identification Card (FID) or be a licensed dealer to purchase rifles and shotguns</li><li>Must have Permit to Purchase a handgun or be a licensed dealer</li><li>Permit to Carry required to possess handguns; FID required to possess rifles or shotguns</li><li>Permit to Carry required for concealed or open carry</li><li>Background checks required to purchase a firearm</li><li>Castle Doctrine</li></ul>',
    NM: '<h3>New Mexico</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>No Stand Your Ground law or Castle Doctrine</li></ul>',
    NY: '<h3>New York</h3><ul><li>No registration required for rifles and shotguns, except in New York City</li><li>Registration required for handguns</li><li>No permit required to purchase rifles and shotguns, except in New York City</li><li>Permit required to purchase handguns</li><li>No license required to possess rifles and shotguns</li><li>License required to possess a handgun</li><li>License to possess a handgun serves also as a license to carry unless restricted; New York City requires special permission</li><li>Possession of any loaded rifle or shotgun in a vehicle is prohibited</li><li>Background checks required federally for sale by a firearms dealer</li><li>Background check required for gun transfers between unlicensed persons at a gun show</li><li>Background check required for handgun license</li><li>Castle Doctrine</li></ul>',
    NC: '<h3>North Carolina</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles and shotguns</li><li>Permit required to purchase handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>Background checks required for handgun and concealed weapons permits</li><li>Castle Doctrine</li></ul>',
    ND: '<h3>North Dakota</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
    OH: '<h3>Ohio</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
    OK: '<h3>Oklahoma</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Stand Your Ground law</li></ul>',
    OR: '<h3>Oregon</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required for sale by a firearms dealer</li><li>No background check required for transfer between private parties, except at gun shows</li><li>Castle Doctrine</li></ul>',
    PA: '<h3>Pennsylvania</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>Purchases and transfers must be made at the place of business of a licensed dealer or county sheriff\'s office</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>Background check required for all sales of handguns</li><li>Stand Your Ground law</li></ul>',
    RI: '<h3>Rhode Island</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns, but there\'s a seven-day waiting period after purchasers submit an application</li><li>Handguns also require a safety course</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required for all firearm purchases</li><li>Castle Doctrine</li></ul>',
    SC: '<h3>South Carolina</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>Must be a resident of South Carolina to purchase handgun from a South Carolina dealer</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
    SD: '<h3>South Dakota</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns; application required for handgun if purchaser doesn\'t hold a valid carrying permit</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for carry</li><li>Background check required</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
    TN: '<h3>Tennessee</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for carrying a handgun; involves firearm safety training</li><li>Background checks required federally for sale by a federally licensed dealer</li><li>No background check required for transfer between private parties</li><li>Stand Your Ground law</li></ul>',
    TX: '<h3>Texas</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry of a handgun; requires a handgun proficiency course</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Stand Your Ground law</li></ul>',
    UT: '<h3>Utah</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Stand Your Ground law</li></ul>',
    VT: '<h3>Vermont</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>No permit required for concealed or open carry</li><li>Background checks required federally for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>No Stand Your Ground law or Castle Doctrine</li></ul>',
    VA: '<h3>Virginia</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>No Stand Your Ground law or Castle Doctrine</li></ul>',
    WA: '<h3>Washington</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Stand Your Ground law</li></ul>',
    WV: '<h3>West Virginia</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
    WI: '<h3>Wisconsin</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns, but there\'s a 48-hour waiting period for handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>Permit required for concealed carry</li><li>Background checks required for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
    WY: '<h3>Wyoming</h3><ul><li>No registration required for firearms</li><li>No permit required to purchase rifles, shotguns, or handguns</li><li>No permit required to possess rifles, shotguns, or handguns</li><li>No permit required for concealed carry</li><li>Background checks required for sale by a firearms dealer</li><li>No background check required for transfer between private parties</li><li>Castle Doctrine</li></ul>',
  };     
  var image = $('#usa_image');
  var tooltip = $('.tooltip');
	image.mapster({
    singleSelect: true,
    mapKey: 'state',
    listKey: 'name',
    onClick: function (e) {
      // update text depending on area selected
      tooltip.html(xref[e.key]);
      image.mapster('set_options', { 
        areas: [{
          key: e,
        }]
      });
    },
    showToolTip: true,
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
});