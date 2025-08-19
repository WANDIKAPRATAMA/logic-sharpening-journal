function roundRobin(jobs: number[], slice: number, index: number): number {
  console.log("Proceessed Started");
  if (!jobs[index]) {
    //Invalid Opration
    return 0;
  }
  let result = 0;
  let processed = jobs.map((item, currIndex) => ({
    job: item,
    primary: currIndex === index,
    //! Removed karna yang dicari total cc dari semua proses yuang ada
    // cc: 0,
  }));

  //   let reminderJob = processed.find((item) => item.primary);
  //   console.log("🚀 ~ roundRobin ~ reminderJob:", reminderJob);
  //   console.log("🚀 ~  Condition", reminderJob && reminderJob?.job > 0);

  while (true) {
    // console.log("Processed", processed);
    //   while (jobs[index] > 0) {
    //     for (let i = 0; i < jobs.length; i++) {
    //       jobs[i] -= slice;
    //       result += slice;
    //     }
    //   }

    for (let i = 0; i < processed.length; i++) {
      if (processed[i].job > 0) {
        const run = Math.min(processed[i].job, slice);
        console.log("🚀 ~ roundRobin ~ run:", run);
        processed[i].job -= run;
        result += run;
      }
      //   const remaindJob = processed[i].job - Math.min(processed[i].job, slice);
      //   if (remaindJob > 0) {
      //     const changged = processed[i].job - remaindJob;
      //     processed[i].job = remaindJob;
      //     processed[i].cc += changged;
      //     result += changged;
      //   }
      //   console.log("🚀 ~ roundRobin ~ processed:", processed);
      if (processed[i]?.primary && processed[i].job === 0) {
        return result;
      }
    }
  }
}

if (require.main === module) {
  console.log("Roundrobbin Result", roundRobin([10, 20, 1], 5, 0)); // should be return 16
}

export { roundRobin };
