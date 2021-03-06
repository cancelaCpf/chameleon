import * as joule from './jouleMetrics.js'
import * as kilojoule from './kilojouleMetrics.js'
import * as gramcalorie from './gramcalorieMetrics.js'
import * as kilocalorie from './kilocalorieMetrics.js'
import * as watthour from './wattHourMetrics.js'
import * as kilowatthour from './kilowattHourMetrics.js'
// import * as eletronVolt from './eletronVoltMetrics.js'
import * as btu from './btuMetrics.js'
import * as therm from './thermMetrics.js'
import * as footPoundForce from './footPoundForceMetrics.js'

export default {
    ...joule.default,
    ...kilojoule.default,
    ...gramcalorie.default,
    ...kilocalorie.default,
    ...watthour.default,
    ...kilowatthour.default,
    // ...eletronVolt.default,
    ...btu.default,
    ...therm.default,
    ...footPoundForce.default,
}