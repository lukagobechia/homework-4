function asyncOperation(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`step ${step}`);
    }, 1000);
  });
}

async function performOperationsInSequence() {
  try {
    const result1 = await asyncOperation(1);
    console.log(result1);

    const result2 = await asyncOperation(2);
    console.log(result2);

    const result3 = await asyncOperation(3);
    console.log(result3);

    const result4 = await asyncOperation(3);
    console.log(result4);
  } catch (error) {
    console.error(error.message);
  }
}

performOperationsInSequence();
