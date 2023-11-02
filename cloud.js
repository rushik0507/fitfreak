// import { v2 as cloudinary } from "cloudinary";

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dtczjjluk",
  api_key: "835125664552836",
  api_secret: "X5QJhL4kQzp_JIQx8c4XJQDy76U",
});

const uploadimage = async (image) => {
  try {
    const results = await cloudinary.uploader.upload(image);
    return results.secure_url;
  } catch (error) {
    return null;
  }
};

const uploadvideo = async (video) => {
  try {
    const results = await cloudinary.uploader.upload(video, {
      resource_type: "video",
    });
    return results.secure_url;
  } catch (error) {
    return null;
  }
};

const data = [
  {
    name: "Ab Wheel",
    muscle: "Abdominals",
    equipment: "Other",
    isvideo: true,
    src: "./images/Ab Wheel.jpg",
    main: "./videos/Ab Wheel.mp4",
  },
  {
    name: "Bicycle Crunch",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Bicycle Crunch.jpg",
    main: "./videos/Bicycle Crunch.mp4",
  },
  {
    name: "Bicycle Crunch Raised Legs",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Bicycle Crunch Raised Legs.jpg",
    main: "./videos/Bicycle Crunch Raised Legs.mp4",
  },
  {
    name: "Cable Core Palloff Press",
    muscle: "Abdominals",
    equipment: "Machine",
    isvideo: true,
    src: "./images/Cable Core Palloff Press.jpg",
    main: "./videos/Cable Core Palloff Press.mp4",
  },
  {
    name: "Cable Crunch",
    muscle: "Abdominals",
    equipment: "Machine",
    isvideo: true,
    src: "./images/Cable Crunch.jpg",
    main: "./videos/Cable Crunch.mp4",
  },
  {
    name: "Cable Twist (Down to up)",
    muscle: "Abdominals",
    equipment: "Machine",
    isvideo: true,
    src: "./images/Cable Twist (Down to up).jpg",
    main: "./videos/Cable Twist (Down to up).mp4",
  },
  {
    name: "Cable Twist (Up to down)",
    muscle: "Abdominals",
    equipment: "Machine",
    isvideo: true,
    src: "./images/Cable Twist (Up to down).jpg",
    main: "./videos/Cable Twist (Up to down).mp4",
  },
  {
    name: "Crunch",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Crunch.jpg",
    main: "./videos/Crunch.mp4",
  },
  {
    name: "Crunch (Machine)",
    muscle: "Abdominals",
    equipment: "Machine",
    isvideo: true,
    src: "./images/Crunch (Machine).jpg",
    main: "./videos/Crunch (Machine).mp4",
  },
  {
    name: "Crunch (Weighted)",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Crunch (Weighted).jpg",
    main: "./videos/Crunch (Weighted).jpg",
  },
  {
    name: "Dead Bug",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Dead Bug.jpg",
    main: "./videos/Dead Bug.jpg",
  },
  {
    name: "Decline Crunch",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Decline Crunch.jpg",
    main: "./videos/Decline Crunch.mp4",
  },
  {
    name: "Decline Crunch (Weighted)",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Decline Crunch (Weighted).jpg",
    main: "./videos/Decline Crunch (Weighted).mp4",
  },
  {
    name: "Elbow to Knee",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Elbow to Knee.jpg",
    main: "./videos/Elbow to Knee.mp4",
  },
  {
    name: "Flutter Kicks",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Flutter Kicks.jpg",
    main: "./videos/Flutter Kicks.mp4",
  },
  {
    name: "Front Lever Hold",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Front Lever Hold.jpg",
    main: "./videos/Front Lever Hold.jpg",
  },
  {
    name: "Front Lever Raise",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Front Lever Raise.jpg",
    main: "./videos/Front Lever Raise.jpg",
  },
  {
    name: "Hanging Knee Raise",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Hanging Knee Raise.jpg",
    main: "./videos/Hanging Knee Raise.jpg",
  },
  {
    name: "Hanging Leg Raise",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Hanging Leg Raise.jpg",
    main: "./videos/Hanging Leg Raise.mp4",
  },
  {
    name: "Heel Taps",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Heel Taps.jpg",
    main: "./videos/Heel Taps.jpg",
  },
  {
    name: "Hollow Rock",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Hollow Rock.jpg",
    main: "./videos/Hollow Rock.jpg",
  },
  {
    name: "Jack Knife (Suspension)",
    muscle: "Abdominals",
    equipment: "Suspension",
    isvideo: false,
    src: "./images/Jack Knife (Suspension).jpg",
    main: "./videos/Jack Knife (Suspension).jpg",
  },
  {
    name: "Jackknife Sit Up",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Jackknife Sit Up.jpg",
    main: "./videos/Jackknife Sit Up.jpg",
  },
  {
    name: "Knee Raise Parallel Bars",
    muscle: "Abdominals",
    equipment: "Machine",
    isvideo: true,
    src: "./images/Knee Raise Parallel Bars.jpg",
    main: "./videos/Knee Raise Parallel Bars.mp4",
  },
  {
    name: "L-Sit Hold",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/L-Sit Hold.jpg",
    main: "./videos/L-Sit Hold.mp4",
  },
  {
    name: "Landmine 180",
    muscle: "Abdominals",
    equipment: "Barbell",
    isvideo: true,
    src: "./images/Landmine 180.jpg",
    main: "./videos/Landmine 180.mp4",
  },
  {
    name: "Leg Raise Parallel Bars",
    muscle: "Abdominals",
    equipment: "Machine",
    isvideo: false,
    src: "./images/Leg Raise Parallel Bars.jpg",
    main: "./videos/Leg Raise Parallel Bars.jpg",
  },
  {
    name: "Lying Knee Raise",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: false,
    src: "./images/Lying Knee Raise.jpg",
    main: "./videos/Lying Knee Raise.jpg",
  },
  {
    name: "Lying Leg Raise",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Lying Leg Raise.jpg",
    main: "./videos/Lying Leg Raise.mp4",
  },
  {
    name: "Oblique Crunch",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Oblique Crunch.jpg",
    main: "./videos/Oblique Crunch.mp4",
  },
  {
    name: "Plank",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Plank.jpg",
    main: "./videos/Plank.mp4",
  },
  {
    name: "Reverse Crunch",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Reverse Crunch.jpg",
    main: "./videos/Reverse Crunch.mp4",
  },
  {
    name: "Reverse Plank",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Reverse Plank.jpg",
    main: "./videos/Reverse Plank.mp4",
  },
  {
    name: "Russian Twist (Bodyweight)",
    muscle: "Abdominals",
    equipment: "Plate",
    isvideo: true,
    src: "./images/Russian Twist (Bodyweight).jpg",
    main: "./videos/Russian Twist (Bodyweight).mp4",
  },
  {
    name: "Russian Twist (Weighted)",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Russian Twist (Weighted).jpg",
    main: "./videos/Russian Twist (Weighted).mp4",
  },
  {
    name: "Side Bend",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Side Bend.jpg",
    main: "./videos/Side Bend.mp4",
  },
  {
    name: "Side Bend (Dumbbell)",
    muscle: "Abdominals",
    equipment: "Dumbbell",
    isvideo: true,
    src: "./images/Side Bend (Dumbbell).jpg",
    main: "./videos/Side Bend (Dumbbell).mp4",
  },
  {
    name: "Side Plank",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Side Plank.jpg",
    main: "./videos/Side Plank.mp4",
  },
  {
    name: "Sit Up",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Sit Up.jpg",
    main: "./videos/Sit Up.mp4",
  },
  {
    name: "Toes to Bar",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/Toes to Bar.jpg",
    main: "./videos/Toes to Bar.mp4",
  },
  {
    name: "V Up",
    muscle: "Abdominals",
    equipment: "None",
    isvideo: true,
    src: "./images/V Up.jpg",
    main: "./videos/V Up.mp4",
  },
  {
    name: "Hip Abduction (Machine)",
    muscle: "Abductors",
    equipment: "Machine",
    isvideo: true,
    src: "./images/Hip Abduction (Machine).jpg",
    main: "./videos/Hip Abduction (Machine).mp4",
  },
  {
    name: "Hip Adduction (Machine)",
    muscle: "Adductors",
    equipment: "Machine",
    isvideo: true,
    src: "./images/Hip Adduction (Machine).jpg",
    main: "./videos/Hip Adduction (Machine).mp4",
  },
];

const newdata = data.map(async (obj) => {
  const newimage = await uploadimage(obj.src);
  var newvideo;
  if (obj.isvideo) {
    newvideo = await uploadvideo(obj.main);
  } else {
    newvideo = await uploadimage(obj.main);
  }
  return {
    ...obj,
    src: newimage,
    main: newvideo,
  };
});

Promise.all(newdata)
  .then((finaldata) => console.log(finaldata))
  .catch((error) => console.log(error));
