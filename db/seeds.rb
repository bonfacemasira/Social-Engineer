
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
    full_name: "Huon Charpentier",
    email:"HuonCharpentier@rhyta.com",
    license_number: "ieloot0Oo",
    contact: 164987623,
    experience: 4,
    password: "brussels",

)
User.create(
    full_name: "Robert R. Guardado",
    email:"RobertRGuardado@teleworm.us",
    license_number: "4485 4566 1884 0680",
    contact: 1240000,
    experience: 3,
    password: "notsprouts",
    
)
User.create(
    full_name: "Eleanor T. Moyer",
    email:"EleanorTMoyer@dayrep.com",
    license_number: "4556 6774 7399 2407",
    contact: 4568321,
    experience: 9,
    password: "houston",
    
)
User.create(
    full_name: "Arthur S. Henson",
    email:"ArthurSHenson@jourrapide.com",
    license_number: "ahj5CueDeing",
    contact: 10964379,
    experience: 4,
    password: "Sagittarius",
    
)
User.create(
    full_name: "Francis M. Cisneros",
    email:"FrancisMCisneros@armyspy.com",
    license_number: "ajodnooows",
    contact: 124478183,
    experience: 6,
    password: "aquaris",
    
)
User.create(
    full_name: "Glyceria Abakumova",
    email:"GlyceriaAbakumova@armyspy.com",
    license_number: "aeVai8cohj",
    contact: 1577854,
    experience: 5,
    password: "turtle",
    
)


Project.create(
title:"Lake Pontchartrain Causeway",
description:"The Lake Pontchartrain Causeway in Louisiana (U.S) spans the entirety of Lake Pontchartrain and is 23.83 miles (38.35km) in length. Despite it being opened decades ago in 1959, it is still the longest continuous stretch of bridge over water in the world. The causeway is supported by 9,500 pilings and is so stable that it has suffered a minute amount of damage from major hurricanes and storms when compared to any other causeway worldwide.",
image: "shorturl.at/aM236",
status:"completed",
location:"New_orleans",
user_id:2
)
Project.create(
    title:" The Colosseum",
    description:"Rome’s most famous landmark is an awe-inspiring monument for its immense scale, lurid past and ability to withstand the test of time. Originally known as the Flavian Amphitheater, the Colosseum is nearly 2,000 years old and remains the largest amphitheater ever built.",
    image: "shorturl.at/jOPQ6",
    status:"ongoing",
    location:"Rome",
    user_id:5
    )
    Project.create(
        title:"The Golden Gate Bridge",
        description:"The Golden Gate Bridge is considered by many to be one of the most beautiful bridges in the world. This $27 million project is a mile-long suspension bridge that spans a strait, connecting the city of San Francisco to Marin County. It opened in 1937 and was the longest suspension bridge in the world for almost three decades. The bridge is one of the most recognised and influential symbols of the United States and has been declared a Wonder of the Modern World ",
        image: "shorturl.at/BIJMN",
        status:"complete",
        location:"San-francisco",
        user_id:3
        )
Project.create(
    title:" English Channel Tunnel ",
    description:"The English Channel Tunnel links the shore of Kent in the UK with Pas-de-Calais in France. It has the longest undersea portion of any tunnel in the world, at 23.5 miles (37.9km). At its deepest point, it is 75 metres (250ft) below the sea bed and 115m (380ft) below sea level. It is designed to carry high-speed Eurostar passenger trains, international goods trains and a shuttle for road vehicles, making it the largest transport system of its kind in the entire world. ",
    image: "shorturl.at/ktzMN",
    status:"pending ",
    location:"london",
    user_id:3
 )  
 Project.create(
    title:"Air Flow Detector Circuit",
    description:"This simple  project is used to design an indicator to show the rate of air flow in a given space. The air flow is sensed with the help of an incandescent bulb filament. The variations due to the change of resistance in the bulb due to the air flow are given to the input of an LM339 operational amplifier. ",
    image: "shorturl.at/cilX1",
    status:"complete",
    location:"Kansas",
    user_id:9
 ) 
 Project.create(
    title:"3 speed gearbox mechanism",
    description:"The 3 Speed Gearbox presents the mechanism of a gearbox. Gears of various dimensions are placed along the x and y axis. A motor rotates the central shaft and different arrangements that can be made in the project causes the rotational motion to transfer from one axis to other. The project is mainly made from Mdf, mild steel and Acrylic. The machine can be divided into 4 groups of gears. Each group consists of 4 gears of different dimensions. The machine works in 3 different scenarios.",
    image: "https://nevonprojects.com/wp-content/uploads/2022/08/3-Speed-Gearbox-3d.jpg",
    status:"pending",
    location:"Belfast",
    user_id:6
 ) 
 Project.create(
    title:"The springless suspension system",
    description:"The Springless Suspension System Combines a differential mechanism and an oscillating system. A differential is a gear train with three drive shafts that has a property such that the rotational speed of one shaft is the average speeds of the others, or a fixed multiple of that average and Oscillation is the repetitive or periodic variation of an object.
    The Frame of the system is mostly made of Mild steel. The frame that holds the tires oscillates freely. The same frame is connected to the differential.",
    image: "https://nevonprojects.com/wp-content/uploads/2022/05/Springless-Suspension-2-tm.jpg",
    status:"complete",
    location:"Belfast",
    user_id:6
 )    
 puts "successful seeding"