import { merchant } from "../index"

describe("Program", () => {
	it("load codes", () =>
		expect(
			["A001", "B001", "GW01", "H001", "R001", "V001"]
				.flatMap(p => merchant.Program.load(p)?.categories.map(c => c.code))
				.sort()
				.join(", ")
		).toMatchInlineSnapshot(
			`"3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069, 3070, 3071, 3072, 3075, 3076, 3077, 3078, 3079, 3080, 3081, 3082, 3083, 3084, 3085, 3087, 3088, 3089, 3090, 3094, 3096, 3097, 3098, 3099, 3100, 3102, 3103, 3106, 3111, 3112, 3117, 3125, 3127, 3129, 3130, 3131, 3132, 3135, 3136, 3144, 3146, 3148, 3151, 3156, 3159, 3161, 3164, 3167, 3171, 3172, 3174, 3175, 3177, 3178, 3180, 3181, 3182, 3183, 3184, 3185, 3186, 3187, 3188, 3190, 3191, 3193, 3196, 3197, 3200, 3204, 3206, 3211, 3212, 3213, 3217, 3219, 3220, 3221, 3222, 3223, 3226, 3228, 3229, 3231, 3234, 3236, 3239, 3240, 3241, 3242, 3243, 3245, 3246, 3247, 3248, 3252, 3253, 3256, 3260, 3261, 3263, 3266, 3267, 3280, 3282, 3285, 3286, 3287, 3292, 3293, 3294, 3295, 3296, 3297, 3298, 3299, 3300, 3301, 3302, 3303, 3308, 3351, 3352, 3353, 3354, 3355, 3357, 3359, 3360, 3361, 3362, 3364, 3366, 3368, 3370, 3374, 3376, 3380, 3381, 3385, 3386, 3387, 3388, 3389, 3390, 3391, 3393, 3394, 3395, 3396, 3398, 3400, 3405, 3409, 3412, 3420, 3421, 3423, 3425, 3427, 3428, 3429, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3438, 3439, 3441, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545, 3546, 3547, 3548, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3562, 3563, 3564, 3565, 3566, 3567, 3568, 3569, 3570, 3571, 3572, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586, 3587, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3596, 3597, 3598, 3599, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3618, 3619, 3620, 3621, 3622, 3623, 3624, 3625, 3626, 3627, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3638, 3639, 3640, 3641, 3642, 3643, 3644, 3645, 3646, 3647, 3648, 3649, 3650, 3651, 3652, 3653, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3661, 3662, 3663, 3664, 3665, 3666, 3667, 3668, 3669, 3670, 3671, 3672, 3673, 3674, 3675, 3676, 3677, 3678, 3679, 3680, 3681, 3682, 3683, 3684, 3685, 3686, 3687, 3688, 3689, 3690, 3691, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705, 3706, 3707, 3708, 3709, 3710, 3711, 3712, 3713, 3714, 3715, 3716, 3717, 3718, 3719, 3720, 3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728, 3729, 3730, 3731, 3732, 3733, 3734, 3735, 3736, 3737, 3738, 3739, 3740, 3741, 3742, 3743, 3744, 3745, 3746, 3747, 3748, 3749, 3750, 3751, 3752, 3753, 3754, 3755, 3756, 3757, 3758, 3759, 3760, 3761, 3762, 3763, 3764, 3765, 3766, 3767, 3768, 3769, 3770, 3771, 3772, 3773, 3774, 3775, 3776, 3777, 3778, 3779, 3780, 3781, 3782, 3783, 3784, 3785, 3786, 3787, 3788, 3789, 3790, 3791, 3792, 3793, 3794, 3795, 3796, 3797, 3798, 3799, 3800, 3801, 3802, 3803, 3804, 3805, 3806, 3807, 3808, 3809, 3810, 3811, 3812, 3813, 3814, 3815, 3816, 3817, 3818, 3819, 3820, 3821, 3822, 3823, 3824, 3825, 3826, 3827, 3828, 3829, 3830, 3831, 3832, 3833, 3834, 3835, 3836, 3837, 3838, 3839, 4112, 4131, 4411, 4511, 4582, 4722, 5962, 6513, 7011, 7012, 7032, 7033, 7298, 7512, 7513, 7519, 7991, 7997, 7999"`
		))
	it("load string", () =>
		expect(
			["A001", "B001", "GW01", "H001", "R001", "V001"]
				.flatMap(p => merchant.Program.load(p)?.categories.map(c => p + "  " + c.code + "  " + c.name))
				.sort()
				.join("\n")
		).toMatchInlineSnapshot(`
"A001  3000  United Airlines
A001  3001  American Airlines
A001  3002  Pan American
A001  3003  Eurofly
A001  3004  Dragonair
A001  3005  British Airways
A001  3006  Japan Air Lines
A001  3007  Air France
A001  3008  Lufthansa
A001  3009  Air Canada
A001  3010  Royal Dutch Airlines (KLM)
A001  3011  Aeroflot
A001  3012  Qantas
A001  3013  ITA AIRWAYS
A001  3014  Saudi Arabian Airlines
A001  3015  Swiss International Air Lines
A001  3016  Scandinavian Airline System (SAS)
A001  3017  South African Airways
A001  3018  Varig (Brazil)
A001  3019  Eastern Airlines
A001  3020  Air India
A001  3021  Air Algerie
A001  3022  Philippine Airlines
A001  3023  Mexicana
A001  3024  Pakistan International
A001  3025  Air New Zealand Limited International
A001  3026  Emirates Airlines
A001  3027  Union de Transports Aeriens
A001  3028  Air Malta
A001  3029  SN Brussels Airlines
A001  3030  Aerolineas Argentinas
A001  3031  Olympic Airways
A001  3032  El Al
A001  3033  Ansett Airlines
A001  3034  Etihad Airways
A001  3035  Tap (Portugal)
A001  3036  VASP (Brazil)
A001  3037  EgyptAir
A001  3038  Kuwait Airways
A001  3039  Avianca
A001  3040  Gulf Air (Bahrain)
A001  3041  Balkan: Bulgarian Airlines
A001  3042  Finnair
A001  3043  Aer Lingus
A001  3044  Air Lanka
A001  3045  Nigeria Airways
A001  3046  Cruzeiro do Sul (Brazil)
A001  3047  Turkish Airlines
A001  3048  Royal Air Maroc
A001  3049  Tunis Air
A001  3050  Icelandair
A001  3051  Austrian Airlines
A001  3052  LAN Airlines
A001  3053  AVIACO (Spain)
A001  3054  LADECO (Chile)
A001  3055  LAB (Bolivia)
A001  3056  Jet Airways
A001  3057  Virgin America
A001  3058  Delta
A001  3059  DBA Airlines
A001  3060  Northwest Airlines
A001  3061  Continental
A001  3062  Hapag-Lloyd Express
A001  3063  U.S. Airways
A001  3064  Adria Airways
A001  3065  Air Inter
A001  3066  Southwest Airlines
A001  3067  Vanguard Airlines
A001  3068  Air Astana
A001  3069  Sun Country Airlines
A001  3070  Fly Dubai
A001  3071  Air British Columbia
A001  3072  Cebu Pacific
A001  3075  Singapore Airlines
A001  3076  Aeromexico
A001  3077  Thai Airways
A001  3078  China Airlines
A001  3079  Jetstar Airways
A001  3080  Swoop Inc.
A001  3081  Xiamen Airlines
A001  3082  Korean Airlines
A001  3083  Air Afrique
A001  3084  Eva Airways
A001  3085  Midwest Express Airlines
A001  3087  Metro Airlines
A001  3088  Croatia Air
A001  3089  Transaero
A001  3090  Uni Airways
A001  3094  Zambia Airways
A001  3096  Air Zimbabwe
A001  3097  Spanair
A001  3098  Asiana Airlines
A001  3099  Cathay Pacific
A001  3100  Malaysian Airline System
A001  3102  Iberia
A001  3103  Garuda (Indonesia)
A001  3106  Braathens S.A.F.E. (Norway)
A001  3111  British Midland
A001  3112  Windward Island
A001  3117  Venezolana International de Aviacion
A001  3125  Tan Airlines
A001  3127  Taca International
A001  3129  Surinam Airways
A001  3130  Sunworld International Airways
A001  3131  VLM Airlines
A001  3132  Frontier Airlines
A001  3135  Airlines, Air Carriers
A001  3136  Qatar Airways Company W.L.L.
A001  3144  Virgin Atlantic
A001  3146  Luxair
A001  3148  Air Littoral, S.A.
A001  3151  Air Zaire
A001  3156  GO FLY Ltd.
A001  3159  Provincetown-Boston Airways
A001  3161  All Nippon Airways
A001  3164  Norontair
A001  3167  Aero Continente
A001  3171  Canadian Airlines
A001  3172  Nation Air
A001  3174  JetBlue Airways
A001  3175  Middle East Air
A001  3177  AirTran Airways
A001  3178  Mesa Air
A001  3180  Westjet Airlines
A001  3181  Malev Hungarian Airlines
A001  3182  LOT – Polish Airlines
A001  3183  Oman Aviation Services
A001  3184  LIAT
A001  3185  LAV Linea Aeropostal Venezolana
A001  3186  LAP Lineas Aereas Paraguayas
A001  3187  LACSA (Costa Rica)
A001  3188  Virgin Express
A001  3190  Jugoslav Air
A001  3191  Island Airlines
A001  3193  Indian Airlines
A001  3196  Hawaiian Air
A001  3197  Havasu Airlines
A001  3200  Guyana Airways
A001  3204  Freedom Airlines
A001  3206  China Eastern Airlines
A001  3211  Norwegian Air Shuttle
A001  3212  Dominicana de Aviacion
A001  3213  Braathens Regional Airlines
A001  3217  CSA Ceskoslovenske Aerolinie
A001  3219  Compania Panamena de Aviacion (Copa)
A001  3220  Compania Faucett
A001  3221  Transportes Aeros Militares Ecuatorianos
A001  3222  Command Airways
A001  3223  Comair
A001  3226  Skyways
A001  3228  Cayman Airways
A001  3229  SAETA (Sociedad Ecuatorianas De Transportes Aereo)
A001  3231  SAHSA (Servicio Aero de Honduras)
A001  3234  Caribbean Airlines
A001  3236  Air Arabia Airline
A001  3239  Bar Harbor Airlines
A001  3240  Bahamasair
A001  3241  Aviateca (Guatemala)
A001  3242  Avensa
A001  3243  Austrian Air Service
A001  3245  EasyJet
A001  3246  Ryanair
A001  3247  Gol Airlines
A001  3248  Tam Airlines
A001  3252  ALM Antilean Airlines
A001  3253  America West
A001  3256  Alaska Airlines Inc.
A001  3260  Spirit Airlines
A001  3261  Air China
A001  3263  Aero Servicio Carabobo
A001  3266  Air Seychelles
A001  3267  Air Panama International
A001  3280  Air Jamaica
A001  3282  Air Djibouti
A001  3285  Aero Peru
A001  3286  Aero Nicaraguenses
A001  3287  Aero Coach Aviation
A001  3292  Cyprus Airways
A001  3293  Ecuatoriana
A001  3294  Ethiopian Airlines
A001  3295  Kenya Airways
A001  3296  Air Berlin
A001  3297  Tarom Romanian Air Transport
A001  3298  Air Mauritius
A001  3299  Wideroes Flyveselskap
A001  3300  Azul Brazilian Airlines
A001  3301  Wizz Airlines
A001  3302  Flybe LTD
A001  3303  Tigerair
A001  3308  China Southern
A001  4511  Air Carriers, Airlines: Not Elsewhere Classified
B001  4411  Cruise Lines
GW01  4131  Bus Lines
GW01  4582  Airports, Airport Terminals, Flying Fields
GW01  4722  Travel Agencies and Tour Operators
GW01  5962  Direct Marketing: Travel-Related Arrangement Services
GW01  6513  Real Estate Agents and Managers: Rentals
GW01  7012  Timeshares
GW01  7032  Recreational and Sporting Camps
GW01  7033  Campgrounds and Trailer Parks
GW01  7298  Health and Beauty Spas
GW01  7991  Tourist Attractions and Exhibits
GW01  7997  Clubs: Country Clubs, Membership (Athletic, Recreation, Sports), Private Golf
GW01  7999  Recreation Services: not elsewhere classified
H001  3501  Holiday Inns
H001  3502  Best Western Hotels
H001  3503  Sheraton (Sheraton Hotels)
H001  3504  Hilton
H001  3505  Forte Hotels
H001  3506  Golden Tulip Hotels
H001  3507  Friendship Inns
H001  3508  Quality Inns
H001  3509  Marriott
H001  3510  Days Inns
H001  3511  Arabella Hotels
H001  3512  Intercontinental Hotels
H001  3513  Westin (Westin Hotels)
H001  3514  Amerisuites
H001  3515  Rodeway Inns
H001  3516  LaQuinta Inns
H001  3517  Americana Hotels
H001  3518  Sol Hotels
H001  3519  Pullman International Hotels
H001  3520  Meridien Hotels
H001  3521  Royal Lahaina Resort
H001  3522  Tokyo Hotel
H001  3523  Peninsula Hotels
H001  3524  WelcomGroup Hotels
H001  3525  Dunfey Hotels
H001  3526  Prince Hotels
H001  3527  Downtowner Passport
H001  3528  Red Lion Inns
H001  3529  CP (Canadian Pacific) Hotels
H001  3530  Renaissance Hotels
H001  3531  Kauai Coconut Beach Resort
H001  3532  Royal Kona Resort
H001  3533  Hotel Ibis
H001  3534  Southern Pacific Hotel
H001  3535  Hilton International
H001  3536  AMFAC Hotels
H001  3537  ANA Hotels
H001  3538  Concorde Hotels
H001  3539  Summerfield Suites Hotel
H001  3540  Iberotel Hotels
H001  3541  Hotel Okura
H001  3542  Royal Hotels
H001  3543  Four Seasons Hotels
H001  3544  Ciga Hotels
H001  3545  Shangri-La International
H001  3546  Hotel Sierra
H001  3547  Breakers Resort
H001  3548  Hotels Melia
H001  3549  Auberge des Governeures
H001  3550  Regal 8 Inns
H001  3551  Mirage Hotel and Casino
H001  3552  Coast Hotel
H001  3553  Park Inn by Radisson
H001  3554  Pinehurst Resort
H001  3555  Treasure Island Hotel and Casino
H001  3556  Barton Creek Resort
H001  3557  Manhattan East Suite Hotels
H001  3558  Jolly Hotels
H001  3559  Candlewood Suites
H001  3560  Aladdin Resort and Casino
H001  3561  Golden Nugget
H001  3562  Comfort Inns
H001  3563  Journey’s End Motels
H001  3564  Sam’s Town Hotel and Casino
H001  3565  Relax Inns
H001  3566  Garden Place Hotel
H001  3567  Soho Grand Hotel
H001  3568  Ladbroke Hotels
H001  3569  Tribeca Grand Hotel
H001  3570  Forum Hotels
H001  3571  Grand Wailea Resort
H001  3572  Miyako Hotel
H001  3573  Sandman Hotels
H001  3574  Venture Inn
H001  3575  Vagabond Hotels
H001  3576  La Quinta Resort
H001  3577  Mandarin Oriental Hotels
H001  3578  Frankenmuth Bavarian
H001  3579  Hotel Mercure
H001  3580  Hotel Del Coronado
H001  3581  Delta Hotels
H001  3582  California Hotel and Casino
H001  3583  Radisson BLU
H001  3584  Princess Hotels International
H001  3585  Hungar Hotels
H001  3586  Sokos Hotel
H001  3587  Doral Hotels
H001  3588  Helmsley Hotels
H001  3589  Doral Golf Resort
H001  3590  Fairmont Hotels
H001  3591  Sonesta Hotels
H001  3592  Omni Hotels
H001  3593  Cunard Hotels
H001  3594  Arizona Biltmore
H001  3595  Hospitality Inns
H001  3596  Wynn Las Vegas
H001  3597  Riverside Resort and Casino
H001  3598  Regent International Hotel
H001  3599  Pannonia Hotels
H001  3600  Saddlebrook Resort: Tampa
H001  3601  TradeWinds Resorts
H001  3602  Hudson Hotel
H001  3603  Noah’s Hotel
H001  3604  Hilton Garden Inn
H001  3605  Jurys Doyle Hotel Group
H001  3606  Jefferson Hotel
H001  3607  Fontainebleau Resort
H001  3608  Gaylord Opryland
H001  3609  Gaylord Palms
H001  3610  Gaylord Texan
H001  3611  C MON INN
H001  3612  Movenpick Hotels
H001  3613  Microtel Inn and Suites
H001  3614  AmericInn
H001  3615  Travelodge
H001  3616  Hermitage Hotel
H001  3617  America’s Best Value Inn
H001  3618  Great Wolf
H001  3619  aloft (aloft hotels)
H001  3620  Binion’s Horseshoe Club
H001  3621  Extended Stay
H001  3622  Merlin Hotel Group
H001  3623  Dorint Hotels
H001  3624  Lady Luck Hotel and Casino
H001  3625  Hotel Universale
H001  3626  Studio Plus
H001  3627  Extended Stay America
H001  3628  Excalibur Hotel and Casino
H001  3629  Dan Hotels
H001  3630  Tokyu Hotels
H001  3631  Sleep Inns
H001  3632  The Phoenician
H001  3633  Rank Hotels
H001  3634  Swissotel
H001  3635  Reso Hotel
H001  3636  Sarova Hotels
H001  3637  Ramada Inns
H001  3638  Howard Johnson
H001  3639  Mount Charlotte Thistle
H001  3640  Hyatt Hotels
H001  3641  Sofitel Hotels
H001  3642  Novotel Hotels
H001  3643  Steigenberger Hotels
H001  3644  EconoLodges
H001  3645  Queens Moat Houses
H001  3646  Swallow Hotels
H001  3647  Husa Hotels
H001  3648  De Vera Hotels
H001  3649  Radisson
H001  3650  Red Roof Inns
H001  3651  Imperial London Hotels
H001  3652  Embassy Hotels
H001  3653  Penta Hotels
H001  3654  Loews Hotels
H001  3655  Scandic Hotels
H001  3656  Sara Hotels
H001  3657  Oberoi Hotels
H001  3658  New Otani Hotels
H001  3659  Taj Hotels International
H001  3660  Knights Inn
H001  3661  Metropole Hotels
H001  3662  Circus Circus Hotel and Casino
H001  3663  Hoteles El Presidente
H001  3664  Flag Inns
H001  3665  Hampton Inn Hotels
H001  3666  Stakis Hotels
H001  3667  Luxor Hotel and Casino
H001  3668  Maritim Hotels
H001  3669  Eldorado Hotel and Casino
H001  3670  Arcade Hotels
H001  3671  Arctia Hotels
H001  3672  Campanile Hotels
H001  3673  IBUSZ Hotels
H001  3674  Rantasipi Hotels
H001  3675  Interhotel CEDOK
H001  3676  Monte Carlo Hotel and Casino
H001  3677  Climat de France Hotels
H001  3678  Cumulus Hotels
H001  3679  Silver Legacy Hotel and Casino
H001  3680  Hoteis Othan
H001  3681  Adams Mark Hotels
H001  3682  Sahara Hotel and Casino
H001  3683  Bradbury Suites
H001  3684  Budget Hosts Inns
H001  3685  Budgetel Inns
H001  3686  Susse Chalet
H001  3687  Clarion Hotels
H001  3688  Compri Hotels
H001  3689  Consort Hotels
H001  3690  Courtyard by Marriott
H001  3691  Dillon Inn
H001  3692  Doubletree
H001  3693  Drury Inn
H001  3694  Economy Inns of America
H001  3695  Embassy Suites
H001  3696  Excel Inn
H001  3697  Fairfield Hotels
H001  3698  Harley Hotels
H001  3699  Midway Motor Lodge
H001  3700  Motel 6
H001  3701  La Mansion Del Rio
H001  3702  Registry Hotels
H001  3703  Residence Inn
H001  3704  Royce Hotels
H001  3705  Sandman Inn
H001  3706  Shilo Inn
H001  3707  Shoney’s Inn
H001  3708  Virgin River Hotel and Casino
H001  3709  Super 8 Motels
H001  3710  The Ritz-Carlton
H001  3711  Flag Inns (Australia)
H001  3712  Buffalo Bill’s Hotel and Casino
H001  3713  Quality Pacific Hotel
H001  3714  Four Seasons (Australia) Hotels
H001  3715  Fairfield Inn
H001  3716  Carlton Hotels
H001  3717  City Lodge Hotels
H001  3718  Karos Hotels
H001  3719  Protea Hotels
H001  3720  Southern Sun Hotels
H001  3721  Conrad Hotels
H001  3722  Wyndham
H001  3723  Rica Hotels
H001  3724  Inter Nor Hotels
H001  3725  Sea Pines Resort
H001  3726  Rio Suites
H001  3727  Broadmoor Hotel
H001  3728  Bally’s Hotel and Casino
H001  3729  John Ascuagas Nugget
H001  3730  MGM Grand Hotel
H001  3731  Harrahs Hotels and Casinos
H001  3732  Opryland Hotel
H001  3733  Boca Raton Resort
H001  3734  Harvey Bristol Hotels
H001  3735  Masters Economy Inns
H001  3736  Colorado Belle Edgewater Resort
H001  3737  Riviera Hotel and Casino
H001  3738  Tropicana Resort and Casino
H001  3739  Woodside Hotels and Resorts
H001  3740  TownePlace Suites
H001  3741  Millennium Hotels
H001  3742  Club Med
H001  3743  Biltmore Hotel and Suites
H001  3744  Carefree Resorts
H001  3745  St. Regis Hotel
H001  3746  Eliot Hotels
H001  3747  Club Corp/Club Resorts
H001  3748  Wellesley Inns
H001  3749  Beverly Hills Hotel
H001  3750  Crowne Plaza Hotels
H001  3751  Homewood Suites
H001  3752  Peabody Hotels
H001  3753  Greenbriar Resorts
H001  3754  Amelia Island Plantation
H001  3755  Homestead
H001  3756  Toyoko Inn
H001  3757  Canyon Ranch
H001  3758  Kahala Mandarin Oriental Hotel
H001  3759  Orchid at Mauna Lani
H001  3760  Halekulani Hotel/Waikiki Parc
H001  3761  Primadonna Hotel and Casino
H001  3762  Whiskey Pete’s Hotel and Casino
H001  3763  Chateau Elan Winery and Resort
H001  3764  Beau Rivage Hotel and Casino
H001  3765  Bellagio Hotel and Casino
H001  3766  Fremont Hotel and Casino
H001  3767  Main Street Hotel and Casino
H001  3768  Silver Star Hotel and Casino
H001  3769  Stratosphere Hotel and Casino
H001  3770  SpringHill Suites
H001  3771  Caesars Hotel and Casino
H001  3772  Nemacolin Woodlands
H001  3773  Venetian Resort Hotel and Casino
H001  3774  New York, New York Hotel and Casino
H001  3775  Sands Resort
H001  3776  Nevele Grande Resort and Country Club
H001  3777  Mandalay Bay Resort
H001  3778  Four Points Hotels
H001  3779  W Hotels
H001  3780  Disney Resorts
H001  3781  Patricia Grand Resort Hotels
H001  3782  Rosen Hotels and Resorts
H001  3783  Town and Country Resort & Convention Center
H001  3784  First Hospitality Hotels
H001  3785  Outrigger Hotels & Resorts
H001  3786  Ohana Hotels of Hawaii
H001  3787  Caribe Royale Resort Suites & Villas
H001  3788  Ala Moana Hotel
H001  3789  Smugglers’ Notch Resort
H001  3790  Raffles Hotels
H001  3791  Staybridge Suites
H001  3792  Claridge Casino Hotel
H001  3793  The Flamingo Hotels
H001  3794  Grand Casino Hotels
H001  3795  Paris Las Vegas Hotel
H001  3796  Peppermill Hotel Casino
H001  3797  Atlantic City Hilton
H001  3798  Embassy Vacation Resort
H001  3799  Hale Koa Hotel
H001  3800  Homestead Suites
H001  3801  Wilderness Hotel and Golf Resort
H001  3802  The Palace Hotel
H001  3803  The Wigwam Golf Resort and Spa
H001  3804  The Diplomat Country Club and Spa
H001  3805  The Atlantic
H001  3806  Princeville Resort
H001  3807  Element
H001  3808  LXR (Luxury Resorts)
H001  3809  Settle Inn
H001  3810  La Costa Resort
H001  3811  Premier Inn
H001  3812  Hyatt Place
H001  3813  Hotel Indigo
H001  3814  The Roosevelt Hotel NY
H001  3815  Holiday Inn Nickelodeon
H001  3816  Home2 Suites by Hilton
H001  3817  Affinia
H001  3818  MainStay Suites
H001  3819  Oxford Suites
H001  3820  Jumeirah Essex House
H001  3821  Caribe Royale
H001  3822  Lodging: Hotels, Motels, Resorts
H001  3823  Grand Sierra Resort
H001  3824  Aria (Aria Resort and Casino)
H001  3825  Vdara (Vdara Hotel and Spa)
H001  3826  Autograph
H001  3827  Galt House
H001  3828  Cosmopolitan of Las Vegas
H001  3829  Country Inn by Carlson
H001  3830  Park Plaza Hotel
H001  3831  Waldorf
H001  3832  Curio Hotels
H001  3833  Canopy Hotels
H001  3834  Baymont Inn and Suites
H001  3835  Dolce Hotels and Resorts
H001  3836  Hawthorn Suites by Wyndham
H001  3837  Hoshino Resorts
H001  3838  Kimpton Hotels
H001  3839  Kyoritsu Hotels
H001  7011  Lodging: Hotels, Motels, Resorts: not elsewhere classified
R001  4112  Passenger Railways
V001  3351  Affiliated Auto Rental
V001  3352  American International
V001  3353  Brooks Rent-A-Car
V001  3354  Action Auto Rental
V001  3355  SIXT Car Rental
V001  3357  Hertz
V001  3359  Payless Car Rental
V001  3360  Snappy Car Rental
V001  3361  Airways Rent-A-Car
V001  3362  Altra Auto Rental
V001  3364  Agency Rent-A-Car
V001  3366  Budget Rent-A-Car
V001  3368  Holiday Rent-A-Car
V001  3370  Rent A Wreck
V001  3374  Accent Rent-A-Car
V001  3376  Ajax Rent-A-Car
V001  3380  Triangle Rent-A-Car
V001  3381  Europcar
V001  3385  Tropical Rent-A-Car
V001  3386  Showcase Rental Cars
V001  3387  Alamo Rent-A-Car
V001  3388  Merchants Rent-A-Car
V001  3389  Avis Rent-A-Car
V001  3390  Dollar Rent-A-Car
V001  3391  Europe By Car
V001  3393  National Car Rental
V001  3394  Kemwell Group Rent-A-Car
V001  3395  Thrifty Car Rental
V001  3396  Tilden Rent-A-Car
V001  3398  Econo Car Rent-A-Car
V001  3400  Auto Host Car Rental
V001  3405  Enterprise Rent-A-Car
V001  3409  General Rent-A-Car
V001  3412  A1 Rent-A-Car
V001  3420  ANSA International
V001  3421  Allstate Rent-A-Car
V001  3423  Avcar Rent-A-Car
V001  3425  Automate Rent-A-Car
V001  3427  Avon Rent-A-Car
V001  3428  Carey Rent-A-Car
V001  3429  Insurance Rent-A-Car
V001  3430  Major Rent-A-Car
V001  3431  Replacement Rent-A-Car
V001  3432  Reserve Rent-A-Car
V001  3433  Ugly Duckling Rent-A-Car
V001  3434  USA Rent-A-Car
V001  3435  Value Rent-A-Car
V001  3436  Autohansa Rent-A-Car
V001  3438  Interent Rent-A-Car
V001  3439  Milleville Rent-A-Car
V001  3441  Advantage Rent-A-Car
V001  7512  Automobile Rental Agency: not elsewhere classified
V001  7513  Truck Rental
V001  7519  Motor Home and Recreational Vehicle Rental"
`))
})
