/* To create initialData we take a json response from fourSquare APi:
 * https://api.foursquare.com/v2/venues/explore?ll=38.24120531635877,21.7349910736084&client_id=YOUR_ID&client_secret=YOUR_SERVER_ID&v=20180625
 * we replace all ' with \' and all \/ with / and finally we use JSON.parse()
 *
 * The initial data we use here is a 'Get Venue Recommendations' response
 * for Pl. Ipsilon Alonion, Patras, Greece, with {lat: 38.24120531635877, lng: 21.7349910736084}
 * For more details look at https://developer.foursquare.com/docs/api/venues/explore
 */

var initialData = JSON.parse('{"meta":{"code":200,"requestId":"5b3117fe351e3d418416a33f"},"response":{"suggestedFilters":{"header":"Tap to show:","filters":[{"name":"Open now","key":"openNow"}]},"suggestedRadius":1050,"headerLocation":"Pátrai","headerFullLocation":"Pátrai","headerLocationGranularity":"city","totalResults":178,"suggestedBounds":{"ne":{"lat":38.24616975478364,"lng":21.740565304011675},"sw":{"lat":38.239556406174074,"lng":21.730068480176044}},"groups":[{"type":"Recommended Places","name":"recommended","items":[{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4d23a32ddaa937040ff1bd81","name":"Πλατεία Υψηλών Αλωνίων","location":{"lat":38.24120531635877,"lng":21.7349910736084,"labeledLatLngs":[{"label":"display","lat":38.24120531635877,"lng":21.7349910736084}],"distance":156,"postalCode":"262 24","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Πλατεία Υψηλών Αλωνίων","262 24 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d164941735","name":"Plaza","pluralName":"Plazas","shortName":"Plaza","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/parks_outdoors/plaza_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4d23a32ddaa937040ff1bd81-0"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4db9a17cf7b1b4c54f55b0d3","name":"Coffee Island","location":{"address":"Λεωφ. Γούναρη","crossStreet":"Αθανασίου Διάκου","lat":38.242342978654406,"lng":21.73525916838994,"labeledLatLngs":[{"label":"display","lat":38.242342978654406,"lng":21.73525916838994}],"distance":159,"postalCode":"262 25","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Λεωφ. Γούναρη (Αθανασίου Διάκου)","262 25 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d1e0931735","name":"Coffee Shop","pluralName":"Coffee Shops","shortName":"Coffee Shop","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4db9a17cf7b1b4c54f55b0d3-1"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"509bf5d4e4b05ee899ec27b6","name":"Abbey Kitchen Bar","location":{"address":"Υψηλών Αλωνίων 26","lat":38.24181693998335,"lng":21.734787988717645,"labeledLatLngs":[{"label":"display","lat":38.24181693998335,"lng":21.734787988717645}],"distance":174,"postalCode":"262 25","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Υψηλών Αλωνίων 26","262 25 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d116941735","name":"Bar","pluralName":"Bars","shortName":"Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/pub_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-509bf5d4e4b05ee899ec27b6-2"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4d4eb27c4f67224b44606550","name":"Απέναντι από το Ωδείο","location":{"address":"Παλαιών Πατρών Γερμανού 27","crossStreet":"Σωτηριάδου","lat":38.24287478735629,"lng":21.738399516836424,"labeledLatLngs":[{"label":"display","lat":38.24287478735629,"lng":21.738399516836424}],"distance":210,"postalCode":"263 35","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Παλαιών Πατρών Γερμανού 27 (Σωτηριάδου)","263 35 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d10e941735","name":"Greek Restaurant","pluralName":"Greek Restaurants","shortName":"Greek","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/greek_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4d4eb27c4f67224b44606550-3"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"5052c2e8e4b02204c194b8ef","name":"Talks","location":{"address":"Υψηλών Αλωνιών 24","lat":38.24079929406209,"lng":21.733843642725624,"labeledLatLngs":[{"label":"display","lat":38.24079929406209,"lng":21.733843642725624}],"distance":265,"postalCode":"262 24","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Υψηλών Αλωνιών 24","262 24 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d16d941735","name":"Café","pluralName":"Cafés","shortName":"Café","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/cafe_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-5052c2e8e4b02204c194b8ef-4"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4c360cc6c44a9521c6513d52","name":"Ρωμαϊκό Ωδείο","location":{"address":"Σωτηριάδου","crossStreet":"Γερμανού","lat":38.2431341110137,"lng":21.73870945778578,"labeledLatLngs":[{"label":"display","lat":38.2431341110137,"lng":21.73870945778578}],"distance":249,"cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Σωτηριάδου (Γερμανού)","Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d137941735","name":"Theater","pluralName":"Theaters","shortName":"Theater","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/arts_entertainment/performingarts_theater_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4c360cc6c44a9521c6513d52-5"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"564a451e498e014dc83efc43","name":"Γιάφκα","location":{"address":"Κανάρη 24-26","lat":38.241916466554066,"lng":21.734753662185636,"labeledLatLngs":[{"label":"display","lat":38.241916466554066,"lng":21.734753662185636}],"distance":180,"postalCode":"262 22","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Κανάρη 24-26","262 22 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d11f941735","name":"Nightclub","pluralName":"Nightclubs","shortName":"Nightclub","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-564a451e498e014dc83efc43-6"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"508d4ec7e4b07f1e63fdba12","name":"Makina","location":{"address":"Πατρέως 83","crossStreet":"Καραϊσκάκη","lat":38.244264,"lng":21.73571,"labeledLatLngs":[{"label":"display","lat":38.244264,"lng":21.73571}],"distance":320,"postalCode":"262 25","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Πατρέως 83 (Καραϊσκάκη)","262 25 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d16d941735","name":"Café","pluralName":"Cafés","shortName":"Café","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/cafe_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-508d4ec7e4b07f1e63fdba12-7"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4d6d6798edc26dcbce2fc9a4","name":"Ανατολή","location":{"address":"Γούναρη 60","lat":38.24248928046683,"lng":21.73495540337704,"labeledLatLngs":[{"label":"display","lat":38.24248928046683,"lng":21.73495540337704}],"distance":191,"postalCode":"262 25","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Γούναρη 60","262 25 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d1d0941735","name":"Dessert Shop","pluralName":"Dessert Shops","shortName":"Desserts","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/dessert_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4d6d6798edc26dcbce2fc9a4-8"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4b7f1776f964a520d31530e3","name":"Νότος Jazz Bar","location":{"address":"Πατρέως 80","lat":38.24466618169899,"lng":21.73523789868304,"labeledLatLngs":[{"label":"display","lat":38.24466618169899,"lng":21.73523789868304}],"distance":375,"postalCode":"262 22","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Πατρέως 80","262 22 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d116941735","name":"Bar","pluralName":"Bars","shortName":"Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/pub_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4b7f1776f964a520d31530e3-9"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"567f0abd498e4bd366adf809","name":"Tomo\'s Open Kitchen Bar","location":{"address":"Σαχτούρη 77","lat":38.24120277418509,"lng":21.733009731186314,"labeledLatLngs":[{"label":"display","lat":38.24120277418509,"lng":21.733009731186314}],"distance":328,"postalCode":"262 22","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Σαχτούρη 77","262 22 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"53d6c1b0e4b02351e88a83d4","name":"Modern Greek Restaurant","pluralName":"Modern Greek Restaurants","shortName":"Modern Greek Restaurants","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/greek_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-567f0abd498e4bd366adf809-10"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"5493326a498e4f438d2b1694","name":"Συνδετήρας","location":{"address":"Αλεξάνδρου Υψηλάντου 146","lat":38.24492656267112,"lng":21.737298784457675,"labeledLatLngs":[{"label":"display","lat":38.24492656267112,"lng":21.737298784457675}],"distance":383,"postalCode":"262 25","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Αλεξάνδρου Υψηλάντου 146","262 25 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d16d941735","name":"Café","pluralName":"Cafés","shortName":"Café","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/cafe_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-5493326a498e4f438d2b1694-11"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4d40ac67cb84b60c513a88ab","name":"Caravel","location":{"address":"Χείλωνος Πατρέως 7","crossStreet":"Ψηλά Αλώνια","lat":38.23985701292906,"lng":21.73620002420015,"labeledLatLngs":[{"label":"display","lat":38.23985701292906,"lng":21.73620002420015}],"distance":189,"postalCode":"262 24","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Χείλωνος Πατρέως 7 (Ψηλά Αλώνια)","262 24 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d1d0941735","name":"Dessert Shop","pluralName":"Dessert Shops","shortName":"Desserts","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/dessert_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4d40ac67cb84b60c513a88ab-12"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4c40cb5f520fa593c79fc8ac","name":"Φαγιούμ","location":{"address":"Βασιλείου Ρούφου 7","lat":38.24354626431797,"lng":21.740088175655508,"labeledLatLngs":[{"label":"display","lat":38.24354626431797,"lng":21.740088175655508}],"distance":370,"postalCode":"262 25","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Βασιλείου Ρούφου 7","262 25 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d116941735","name":"Bar","pluralName":"Bars","shortName":"Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/pub_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4c40cb5f520fa593c79fc8ac-13"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4c9653cb533aa093c6c6d045","name":"Ο Βασίλης","location":{"address":"Πλατεία Ομόνοιας","lat":38.240766791293304,"lng":21.738618304585614,"labeledLatLngs":[{"label":"display","lat":38.240766791293304,"lng":21.738618304585614}],"distance":183,"cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Πλατεία Ομόνοιας","Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"53d6c1b0e4b02351e88a83d6","name":"Grilled Meat Restaurant","pluralName":"Grilled Meat Restaurants","shortName":"Grilled Meat Restaurants","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/greek_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4c9653cb533aa093c6c6d045-14"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4eff0fc393adc82457fc3b53","name":"Πρωτοπορία","location":{"address":"Γεροκωστοπούλου 31-33","lat":38.245197220494525,"lng":21.736397013789112,"labeledLatLngs":[{"label":"display","lat":38.245197220494525,"lng":21.736397013789112}],"distance":412,"cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Γεροκωστοπούλου 31-33","Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d114951735","name":"Bookstore","pluralName":"Bookstores","shortName":"Bookstore","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/shops/bookstore_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4eff0fc393adc82457fc3b53-15"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"5401e8f5498eeb96718f53c5","name":"Lexis","location":{"address":"Κανακάρη 155-157","crossStreet":"Πατρέως","lat":38.24498833820394,"lng":21.735534049804944,"labeledLatLngs":[{"label":"display","lat":38.24498833820394,"lng":21.735534049804944}],"distance":401,"postalCode":"262 21","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Κανακάρη 155-157 (Πατρέως)","262 21 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d114951735","name":"Bookstore","pluralName":"Bookstores","shortName":"Bookstore","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/shops/bookstore_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-5401e8f5498eeb96718f53c5-16"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4caefe20db32f04d627db34d","name":"Amelie","location":{"address":"Παντανάσσης 47","crossStreet":"Κορίνθου","lat":38.245128898438885,"lng":21.73403710825103,"labeledLatLngs":[{"label":"display","lat":38.245128898438885,"lng":21.73403710825103}],"distance":467,"postalCode":"262 21","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Παντανάσσης 47 (Κορίνθου)","262 21 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d16d941735","name":"Café","pluralName":"Cafés","shortName":"Café","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/cafe_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4caefe20db32f04d627db34d-17"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"542c39a5498e0ca4d6ee340e","name":"Aquarέλα","location":{"address":"Γεροκωστοπούλου","crossStreet":"Ηφαίστου","lat":38.244261553247256,"lng":21.737228453256026,"labeledLatLngs":[{"label":"display","lat":38.244261553247256,"lng":21.737228453256026}],"distance":309,"cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Γεροκωστοπούλου (Ηφαίστου)","Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"52e81612bcbc57f1066b79f1","name":"Bistro","pluralName":"Bistros","shortName":"Bistro","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/default_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-542c39a5498e0ca4d6ee340e-18"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"52f8c85c498eb590dbd1ca2c","name":"Motel Vintage Store","location":{"address":"Καραϊσκάκη 167","crossStreet":"Παντανάσσης","lat":38.244061680320634,"lng":21.73548649695536,"labeledLatLngs":[{"label":"display","lat":38.244061680320634,"lng":21.73548649695536}],"distance":305,"cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Καραϊσκάκη 167 (Παντανάσσης)","Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d104951735","name":"Boutique","pluralName":"Boutiques","shortName":"Boutique","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/shops/apparel_boutique_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-52f8c85c498eb590dbd1ca2c-19"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"56348144498e29329cfa7076","name":"Poirot","location":{"address":"Καραϊσκάκη 118","lat":38.24539275413311,"lng":21.73681966144178,"labeledLatLngs":[{"label":"display","lat":38.24539275413311,"lng":21.73681966144178}],"distance":432,"cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Καραϊσκάκη 118","Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d16d941735","name":"Café","pluralName":"Cafés","shortName":"Café","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/cafe_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-56348144498e29329cfa7076-20"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"564adb2f498efebf196c7164","name":"The Juice Bar","location":{"lat":38.24506732941684,"lng":21.734052922624954,"labeledLatLngs":[{"label":"display","lat":38.24506732941684,"lng":21.734052922624954}],"distance":461,"cc":"GR","country":"Ελλάδα","formattedAddress":["Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d112941735","name":"Juice Bar","pluralName":"Juice Bars","shortName":"Juice Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/juicebar_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-564adb2f498efebf196c7164-21"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"517bb291e4b028948624dd1a","name":"Υποβρύχιο Βανίλια","location":{"address":"Πλατεία Καποδιστρίου 7","crossStreet":"Ερμού 113","lat":38.24517294196,"lng":21.738036045241053,"labeledLatLngs":[{"label":"display","lat":38.24517294196,"lng":21.738036045241053}],"distance":423,"postalCode":"262 22","cc":"GR","neighborhood":"Πλατεία Μαρκάτου","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Πλατεία Καποδιστρίου 7 (Ερμού 113)","262 22 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"53d6c1b0e4b02351e88a83e6","name":"Kafenio","pluralName":"Kafenia","shortName":"Kafenia","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-517bb291e4b028948624dd1a-22"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"51a1347d5019028c1b71df8e","name":"GeLatino","location":{"address":"Τριών Ναυάρχων 29","lat":38.242474146958095,"lng":21.73054560853221,"labeledLatLngs":[{"label":"display","lat":38.242474146958095,"lng":21.73054560853221}],"distance":552,"postalCode":"262 22","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Τριών Ναυάρχων 29","262 22 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d1c9941735","name":"Ice Cream Shop","pluralName":"Ice Cream Shops","shortName":"Ice Cream","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/icecream_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-51a1347d5019028c1b71df8e-23"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"568e5c91498e49b9d770beab","name":"Ψητόπολις","location":{"address":"Πλατεία Βασιλέως Γεωργίου Α\'","crossStreet":"Γεροκωστοπούλου","lat":38.24586914802865,"lng":21.73553372332301,"labeledLatLngs":[{"label":"display","lat":38.24586914802865,"lng":21.73553372332301}],"distance":497,"cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Πλατεία Βασιλέως Γεωργίου Α\' (Γεροκωστοπούλου)","Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d16e941735","name":"Fast Food Restaurant","pluralName":"Fast Food Restaurants","shortName":"Fast Food","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/fastfood_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-568e5c91498e49b9d770beab-24"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"538f919d498eb0ad50719451","name":"Πεζόδρομος Ηφαίστου","location":{"lat":38.24432481252454,"lng":21.737327926900377,"labeledLatLngs":[{"label":"display","lat":38.24432481252454,"lng":21.737327926900377}],"distance":317,"cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"52e81612bcbc57f1066b7a25","name":"Pedestrian Plaza","pluralName":"Pedestrian Plazas","shortName":"Pedestrian Street/Plaza","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-538f919d498eb0ad50719451-25"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4cbac5f0cdccb71330446e79","name":"Salumeria","location":{"address":"Παντανάσσης 27","lat":38.24564784891728,"lng":21.733391220458476,"labeledLatLngs":[{"label":"display","lat":38.24564784891728,"lng":21.733391220458476}],"distance":546,"postalCode":"262 21","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Παντανάσσης 27","262 21 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d1c0941735","name":"Mediterranean Restaurant","pluralName":"Mediterranean Restaurants","shortName":"Mediterranean","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/mediterranean_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4cbac5f0cdccb71330446e79-26"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4ca8ad9197c8a1cd671087a5","name":"Σκουφάκι","location":{"address":"Πατρέως 54","lat":38.245384491116646,"lng":21.734419912045038,"labeledLatLngs":[{"label":"display","lat":38.245384491116646,"lng":21.734419912045038}],"distance":477,"postalCode":"262 21","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Πατρέως 54","262 21 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d16d941735","name":"Café","pluralName":"Cafés","shortName":"Café","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/cafe_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4ca8ad9197c8a1cd671087a5-27"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4bb1e1a8f964a52042a83ce3","name":"Χασομέρι","location":{"address":"Παπαδιαμαντοπούλου 10","crossStreet":"Κάστρο","lat":38.24480261638034,"lng":21.74007290510334,"labeledLatLngs":[{"label":"display","lat":38.24480261638034,"lng":21.74007290510334}],"distance":468,"postalCode":"262 25","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Παπαδιαμαντοπούλου 10 (Κάστρο)","262 25 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"4bf58dd8d48988d116941735","name":"Bar","pluralName":"Bars","shortName":"Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/pub_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-4bb1e1a8f964a52042a83ce3-28"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"5313581f498e8fd0b11ae789","name":"Κονσέρβα","location":{"address":"Ηφαίστου 33","lat":38.24458318980987,"lng":21.73775832914256,"labeledLatLngs":[{"label":"display","lat":38.24458318980987,"lng":21.73775832914256}],"distance":353,"postalCode":"262 25","cc":"GR","city":"Πάτρα","state":"Αχαΐα","country":"Ελλάδα","formattedAddress":["Ηφαίστου 33","262 25 Πάτρα, Αχαΐα","Ελλάδα"]},"categories":[{"id":"53d6c1b0e4b02351e88a83da","name":"Meze Restaurant","pluralName":"Meze Restaurants","shortName":"Meze Restaurants","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/greek_","suffix":".png"},"primary":true}],"photos":{"count":0,"groups":[]}},"referralId":"e-0-5313581f498e8fd0b11ae789-29"}]}]}}');

export default initialData;
