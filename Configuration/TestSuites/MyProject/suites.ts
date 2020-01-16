/*
#----------------------------------------------------------------
# Original Author       : Pawan K Gupta
# Created Date          : 26/12/2019
# Last Modified by      : Pawan K Gupta
# Last Modification Date: 31/12/2019
#----------------------------------------------------------------
*/

import homePage = require('./../../../Configuration/TestSuites/MyProject/MyProjectPageSuite.json');
export let suite = {
    HomePage: {
        RequestTileSuite: homePage.requestTile,
        QuickCallSuite: homePage.quickCallTile,
        plannedOutagesSuite: homePage.plannedoutagesTile,
        KBSuite: homePage.kbTile,
        SurveySuite: homePage.surveyTile,
        // tslint:disable-next-line:max-line-length
        HomePageSuite: homePage.requestTile.concat(homePage.quickCallTile, homePage.plannedoutagesTile, homePage.kbTile, homePage.surveyTile),
    },
};
