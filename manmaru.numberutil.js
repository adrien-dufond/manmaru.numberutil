/**
	Utilities for sorting, searching and manipulating Number.
	Inspired from CASA Lib / AS 2.0 (v.10/06/08) - Aaron Clinger, David Nelson
	
	@author Adrien Dufond - manmaru, Inc.
	@src https://github.com/adrien-dufond/manmaru
	@version 0.1
	@since 24/11/2016
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

NumberUtil = (function() {
	
	function NumberUtil() {}
   
	/**
		Determines if the two values are equal, with the option to define the precision.
			
		@param val1: A value to compare.
		@param val2: A value to compare.
		@param precision: The maximum amount the two values can differ and still be considered equal.
		@return Returns <code>true</code> the values are equal; otherwise <code>false</code>.
	*/
	NumberUtil.isEqual = function(val1, val2, precision) {
		if (precision === undefined) precision = 0;
		return Math.abs(val1 - val2) <= Math.abs(precision);
	}
		
	/**
		Evaluates <code>val1</code> and <code>val2</code> and returns the smaller value. 
		Unlike <code>Math.min</code> this method will return the defined value if the other value is <code>null</code> 
		or not a number.
			
		@param val1: A value to compare.
		@param val2: A value to compare.
		@return Returns the smallest value, or the value out of the two that is defined and valid.	
	*/
	NumberUtil.min = function(val1, val2) {
		if (isNaN(val1) && isNaN(val2) || val1 == null && val2 == null)
				return NaN;
			
			if (val1 == null || val2 == null)
				return (val2 == null) ? val1 : val2;
			
			if (isNaN(val1) || isNaN(val2))
				return isNaN(val2) ? val1 : val2;
			
			return Math.min(val1, val2);
	}

	/**
		Creates a random number within the defined range.
		
		@param min: The minimum value the random number can be.
		@param min: The maximum value the random number can be.
		@return Returns a random number within the range.
	*/
	NumberUtil.randomWithinRange = function(min, max) {
		return min + (Math.random() * (max - min));
	}

	/**
		Creates a random integer within the defined range.
		
		@param min: The minimum value the random integer can be.
		@param min: The maximum value the random integer can be.
		@return Returns a random integer within the range.
	*/
	NumberUtil.randomIntegerWithinRange = function(min, max) {
		return Math.round(NumberUtil.randomWithinRange(min, max));
	}
		
	/**
		Determines if the number is even.
		
		@param value: A number to determine if it is divisible by <code>2</code>.
		@return Returns <code>true</code> if the number is even; otherwise <code>false</code>.
	*/
	NumberUtil.isEven = function(value) {
		return (value & 1) == 0;
	}
	
	/**
		Determines if the number is odd.
		
		@param value: A number to determine if it is not divisible by <code>2</code>.
		@return Returns <code>true</code> if the number is odd; otherwise <code>false</code>.
	*/
	NumberUtil.isOdd = function(value) {
		return !NumberUtil.isEven(value);
	}
	
	/**
		Adds a leading zero for numbers less than ten.
		
		@param value: Number to add leading zero.
		@return Number as a String; if the number was less than ten the number will have a leading zero.
	*/
	NumberUtil.addLeadingZero = function(value) {
		return (value < 10) ? '0' + value : value.toString();
	}

	/**
		Determines if the number is an integer.
		
		@param value: A number to determine if it contains no decimal values.
		@return Returns <code>true</code> if the number is an integer; otherwise <code>false</code>.
	*/
	NumberUtil.isInteger = function(value) {
		return (value % 1) == 0;
	}

	/**
		Determines if the number is prime.
		
		@param value: A number to determine if it is only divisible by <code>1</code> and itself.
		@return Returns <code>true</code> if the number is prime; otherwise <code>false</code>.
	*/
	NumberUtil.isPrime = function(value) {
		if (value == 1 || value == 2)
			return true;
		
		if (NumberUtil.isEven(value))
			return false;
		
		var s = Math.sqrt(value);
		for (var i = 3; i <= s; i++)
			if (value % i == 0)
				return false;
		
		return true;
	}
	
	/**
		Rounds a number's decimal value to a specific place.
		
		@param value: The number to round.
		@param place: The decimal place to round.
		@return Returns the value rounded to the defined place. 

		NumberUtil.roundToPlace(3.14159, 2)); //  3.14
		NumberUtil.roundToPlace(3.14159, 3)); //  3.142
	*/
	NumberUtil.roundDecimalToPlace = function(value, place) {
		var p = Math.pow(10, place);
		return Math.round(value * p) / p;
	}

	/**
		Determines if the value is included within a range.
		
		@param value: Number to determine if it is included in the range.
		@param firstValue: First value of the range.
		@param secondValue: Second value of the range.
		@return Returns <code>true</code> if the number falls within the range; otherwise <code>false</code>.
		@usageNote The range values do not need to be in order.

		NumberUtil.isBetween(3, 0, 5)); //  true
		(NumberUtil.isBetween(7, 0, 5)); // false
	*/
	NumberUtil.isBetween = function(value, firstValue, secondValue) {
		return !(value < Math.min(firstValue, secondValue) || value > Math.max(firstValue, secondValue));
	}
	
    return NumberUtil;
    
})();
