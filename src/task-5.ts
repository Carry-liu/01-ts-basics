/* function logStatus(status) {
    if (status === "loading") {
      console.log("Loading...");
    } else if (status === "success") {
      console.log("Success!");
    } else if (status === "error") {
      console.log("Something went wrong");
    }
  }
  
  logStatus("loading");
  */
 
  function logStatus(
    status: "loading" | "success" | "error"
  ): void {
    if (status === "loading") {
      console.log("Loading...");
    } else if (status === "success") {
      console.log("Success!");
    } else if (status === "error") {
      console.log("Something went wrong");
    }
  }
  
  logStatus("loading");
  