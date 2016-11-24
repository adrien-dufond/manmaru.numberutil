MANMARU NUMBERUTIL JS
===============

Inspired from CASA Lib / AS 2.0 (v.10/06/08) - Aaron Clinger, David Nelson<br><br>

<b>manmaru.numberutil.js :</b> <br>
Utilities for manipulating number.<br><br>

<b>isEqual</b> -><br>
Determines if the two values are equal, with the option to define the precision<br>
@param val1: A value to compare<br>
@param val2: A value to compare<br>
@param precision: The maximum amount the two values can differ and still be considered equal<br>
@return Returns true the values are equal; otherwise false<br><br>
    
<b>min</b> -><br>
Evaluates <code>val1</code> and <code>val2</code> and returns the smaller value<br>
Unlike <code>Math.min</code> this method will return the defined value if the other value is null or not a number<br>			
@param val1: A value to compare<br>
@param val2: A value to compare<br>
@return Returns the smallest value, or the value out of the two that is defined and valid<br><br>
    
<b>randomWithinRange</b> -><br>
Creates a random number within the defined range<br>
@param min: The minimum value the random number can be<br>
@param min: The maximum value the random number can be<br>
@return Returns a random number within the range<br><br>
    
<b>randomIntegerWithinRange</b> -><br>
Creates a random integer within the defined range<br>
@param min: The minimum value the random integer can be<br>
@param min: The maximum value the random integer can be<br>
@return Returns a random integer within the range<br><br>
    
<b>isEven</b> -><br>
Determines if the number is even<br>
@param value: A number to determine if it is divisible by 2<br>
@return Returns true if the number is even; otherwise false<br><br>
    
<b>isOdd</b> -><br>
Determines if the number is odd<br>
@param value: A number to determine if it is not divisible by 2<br>
@return Returns <code>true</code> if the number is odd; otherwise false<br><br>
    
<b>addLeadingZero</b> -><br>
Adds a leading zero for numbers less than ten<br>
@param value: Number to add leading zero<br>
@return Number as a String; if the number was less than ten the number will have a leading zero<br><br>
    
<b>isInteger</b> -><br>
Determines if the number is an integer<br>
@param value: A number to determine if it contains no decimal values<br>
@return Returns true if the number is an integer; otherwise false<br><br>
    
<b>isPrime</b> -><br>
Determines if the number is prime<br>
@param value: A number to determine if it is only divisible by 1 and itself<br>
@return Returns true if the number is prime; otherwise false<br><br>
    
<b>roundDecimalToPlace</b> -><br>
Rounds a number's decimal value to a specific place<br>
@param value: The number to round<br>
@param place: The decimal place to round<br>
@return Returns the value rounded to the defined place<br><br>
NumberUtil.roundToPlace(3.14159, 2)); //  3.14<br>
NumberUtil.roundToPlace(3.14159, 3)); //  3.142<br><br>
    
<b>isBetween</b> -><br>
Determines if the value is included within a range<br>
@param value: Number to determine if it is included in the range<br>
@param firstValue: First value of the range<br>
@param secondValue: Second value of the range<br>
@return Returns true if the number falls within the range; otherwise false<br>
@usageNote The range values do not need to be in order.<br><br>

NumberUtil.isBetween(3, 0, 5)); //  true<br>
(NumberUtil.isBetween(7, 0, 5)); // false



