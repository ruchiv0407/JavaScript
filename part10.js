function savetoDb(data, success, failure) {
    let internet = Math.floor(Math.random()*10) + 1;
    if(internet > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb("apna college",
    () => {
        console.log("success:data saved successfully");
        savetoDb(
            "hello world",
            () => {
                console.log("success2:data2 saved successfully");
                savetoDb(
                    "Shraddha",
                    () => {
                        console.log("success3:data3 saved successfully");
                    },
                    () => {
                        console.log("failure3:data3 not saved");
                    }
                );
            },
            () => {
                console.log("failure2:weak connection");
            }
        );
    },
    () => {
        console.log("failure:data not saved");
    }
)