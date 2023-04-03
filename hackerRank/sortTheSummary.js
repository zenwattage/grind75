function sortTheSummary() {
    var arr = [1, 2, 3, 4, 5];
    var sum = 0;
    var min = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    min = sum - arr[0];
    max = sum - arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (sum - arr[i] < min) {
            min = sum - arr[i];
        }
        if (sum - arr[i] > max) {
            max = sum - arr[i];
        }
    }
    console.log(min + " " + max);

}