// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector(`#flip`)
    documentTimeline.getElementById(`flip`).addEventListener(`click`, () => {
        // Determine the result using Math.random(), 0 - 1
        let flippedHeads = Math.random () < 0.5;

        if (flippedHeads) {
            // Display the immage and message as heads
            document.getElementById('penny -image').src = 'assets/images/penny-heads.jpg';
            document.getElementById('messsage').textContent = 'You Flipped Heads!';

            // Incremet the headsRolls counter
            headsRolls++;
        } else {
            // Display the immage and message as heads
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg';
            document.getElementById('messsage').textContent = 'You Flipped Tails!';
           
            // Incremet the headsRolls counter
           headsRolls++;

        }
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        let totalRolls = headsRolls + tailsRolls;

        // Make variables to track the percentages of heads and tails
        let percentHeads = 0;
        let percentTails = 0;
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        if (totalRolls > 0){
            percentHeads = Math.round((headsRolls / totalRolls) * 100);
            percentTails = Math.round((tailsRolls / totalRolls) * 100);
        }
        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headsRolls;
        document.getElementById('heads-percent').textContent = percentHeads + '%';
        document.getElementById('tails').textContent = tailsRolls;
        document.getElementById('tails-percent').textContent = percentTails + '%';


    });

    

        
    // Clear Button Click Handler
    document.getElementById('clear').addEventListener('click', () => {
        headsRolls = 0;
        tailsRolls = 0;
        documet.getElementById('message').textContent = 'Let\'s Get Rolling'

        // TODO: Reset global variables to 0
        
        // TODO: Update the scoreboard (same logic as in flip button click handler)
// Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        let totalRolls = headsRolls + tailsRolls;

        // Make variables to track the percentages of heads and tails
        let percentHeads = 0;
        let percentTails = 0;
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        if (totalRolls > 0){
            percentHeads = Math.round((headsRolls / totalRolls) * 100);
            percentTails = Math.round((tailsRolls / totalRolls) * 100);
        }
        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headsRolls;
        document.getElementById('heads-percent').textContent = percentHeads + '%';
        document.getElementById('tails').textContent = tailsRolls;
        document.getElementById('tails-percent').textContent = percentTails + '%';

    }); 
}
