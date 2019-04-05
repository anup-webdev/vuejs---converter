var converter = [{
        id: 0,
        convert: "Area",
        options: [
            "Square metre",
            "Square kilometre",
            "Square mile",
            "Square yard",
            "Square foot",
            "Square inch",
            "Hectare",
            "Acra"
        ]
    },
    {
        id: 1,
        convert: "Data Transfer Rate",
        options: [
            "Bit per second",
            "Kilobit per second",
            "Kilobytes per second",
            "Kibibit per second",
            "Megabit per second",
            "Megabytes per second",
            "Mebibit per second",
            "Gigabit per second",
            "Gigabytes per second",
            "Gibibit per second",
            "Terabit per second",
            "Terabytes per second"
        ]
    },
    {
        id: 2,
        convert: "Digital Storage",
        options: [
            "Bit",
            "Kilobit",
            "Kibibit",
            "Megabit",
            "Mebibit",
            "Gigabit",
            "Gibibit",
            "Terabit",
            "Tebibit",
            "Petabit",
            "Pebibit",
            "Byte",
            "Kilobyte",
            "Kibibyte",
            "Megabyte",
            "Mebibyte",
            "Gigabyte",
            "Gibibyte",
            "Terabyte",
            "Tebibyte",
            "Petabyte",
            "Pebibyte",
        ]
    },
    {
        id: 3,
        convert: "Frequency",
        options: [
            "Hertz",
            "Kilohertz",
            "Megahertz",
            "Gigahertz"
        ]
    },
    {
        id: 4,
        convert: "Length",
        options: [
            "Kilometre",
            "Metre",
            "Centimetre",
            "Millimetre",
            "Micrometre",
            "Nanometre",
            "Mile",
            "Yard",
            "Foot",
            "Inch"
        ]
    },
    {
        id: 5,
        convert: "Mass",
        options: [
            "Tonne",
            "Kilogram",
            "Gram",
            "Milligram",
            "Microgram",
            "Stone",
            "Pound",
            "Ounce"
        ]
    },
    {
        id: 6,
        convert: "Speed",
        options: [
            "Miles per hour",
            "Foot per second",
            "Metre per second",
            "Kilometre per hour",
            "Knot"
        ]
    },
    {
        id: 7,
        convert: "Temperature",
        options: [
            "Celsius",
            "Fahrenheit",
            "Kelvin"
        ]
    },
    {
        id: 8,
        convert: "Time",
        options: [
            "Nanosecond",
            "Microsecond",
            "Millisecond",
            "Second",
            "Minute",
            "Hour",
            "Day",
            "Week",
            "Month",
            "Year",
            "Decade",
            "Century",
        ]
    }
];
var app = new Vue({
    el: '#main',
    data: {
        selected: 7,
        converter,
        optionFrom: "Celsius",
        optionTo: "Fahrenheit",
        input: 0,
        result: 32,
        formula: ""
    },
    methods: {
        selection() {
            if (this.selected == 0) {
                this.optionFrom = "Square kilometre";
                this.optionTo = "Square metre";
                this.input = 1;
                this.result = 1000000;
            } else if (this.selected == 1) {
                this.optionFrom = "Bit per second";
                this.optionTo = "Kilobit per second";
                this.input = 1;
                this.result = 0.001;
            } else if (this.selected == 2) {
                this.optionFrom = "Byte";
                this.optionTo = "Kilobyte";
                this.input = 1;
                this.result = 0.001;
            } else if (this.selected == 3) {
                this.optionFrom = "Hertz";
                this.optionTo = "Kilohertz";
                this.input = 1;
                this.result = 0.001;
            } else if (this.selected == 4) {
                this.optionFrom = "Kilometre";
                this.optionTo = "Metre";
                this.input = 1;
                this.result = 1000;
            } else if (this.selected == 5) {
                this.optionFrom = "Tonne";
                this.optionTo = "Kilogram";
                this.input = 1;
                this.result = 1000;
            } else if (this.selected == 6) {
                this.optionFrom = "Metre per second";
                this.optionTo = "Kilometre per hour";
                this.input = 1;
                this.result = 3.6;
            } else if (this.selected == 7) {
                this.optionFrom = "Celsius";
                this.optionTo = "Fahrenheit";
                this.input = 0;
                this.result = 32;
            } else if (this.selected == 8) {
                this.optionFrom = "Second";
                this.optionTo = "Minute";
                this.input = 1;
                this.result = 0.0166667;
            }
        },
        calculate() {
            var from = this.optionFrom;
            var to = this.optionTo;
            if (this.selected == 0) {

            } else if (this.selected == 1) {

            } else if (this.selected == 2) {

            } else if (this.selected == 3) {

            } else if (this.selected == 4) {

            } else if (this.selected == 5) {
                if (from == "Tonne" && to == "Kilogram") this.tonne_to_kilogram();
                else if (from == "Tonne" && to == "Gram") this.tonne_to_gram();
                else if (from == "Tonne" && to == "Milligram") this.tonne_to_milligram();
                else if (from == "Tonne" && to == "Microgram") this.tonne_to_microgram();
                else if (from == "Tonne" && to == "Stone") this.tonne_to_stone();
                else if (from == "Tonne" && to == "Pound") this.tonne_to_pound();
                else if (from == "Tonne" && to == "Ounce") this.tonne_to_ounce();
                else if (from == "Kilogram" && to == "Tonne") this.kilogram_to_tonne();
                else if (from == "Kilogram" && to == "Gram") this.kilogram_to_gram();
                else if (from == "Kilogram" && to == "Milligram") this.kilogram_to_milligram();
                else if (from == "Kilogram" && to == "Microgram") this.kilogram_to_microgram();
                else if (from == "Kilogram" && to == "Stone") this.kilogram_to_stone();
                else if (from == "Kilogram" && to == "Pound") this.kilogram_to_pound();
                else if (from == "Kilogram" && to == "Ounce") this.kilogram_to_ounce();
                else if (from == "Gram" && to == "Tonne") this.gram_to_tonne();
                else if (from == "Gram" && to == "Kilogram") this.gram_to_kilogram();
                else if (from == "Gram" && to == "Milligram") this.gram_to_milligram();
                else if (from == "Gram" && to == "Microgram") this.gram_to_microgram();
                else if (from == "Gram" && to == "Stone") this.gram_to_stone();
                else if (from == "Gram" && to == "Pound") this.gram_to_pound();
                else if (from == "Gram" && to == "Ounce") this.gram_to_ounce();
                else if (from == "Milligram" && to == "Tonne") this.milligram_to_tonne();
                else if (from == "Milligram" && to == "Kilogram") this.milligram_to_kilogram();
                else if (from == "Milligram" && to == "Gram") this.milligram_to_gram();
                else if (from == "Milligram" && to == "Microgram") this.milligram_to_microgram();
                else if (from == "Milligram" && to == "Stone") this.milligram_to_stone();
                else if (from == "Milligram" && to == "Pound") this.milligram_to_pound();
                else if (from == "Milligram" && to == "Ounce") this.milligram_to_ounce();
                else if (from == "Microgram" && to == "Tonne") this.microgram_to_tonne();
                else if (from == "Microgram" && to == "Kilogram") this.microgram_to_kilogram();
                else if (from == "Microgram" && to == "Gram") this.microgram_to_gram();
                else if (from == "Microgram" && to == "Milligram") this.microgram_to_milligram();
                else if (from == "Microgram" && to == "Stone") this.microgram_to_stone();
                else if (from == "Microgram" && to == "Pound") this.microgram_to_pound();
                else if (from == "Microgram" && to == "Ounce") this.microgram_to_ounce();
                else if (from == "Stone" && to == "Tonne") this.stone_to_tonne();
                else if (from == "Stone" && to == "Kilogram") this.stone_to_kilogram();
                else if (from == "Stone" && to == "Gram") this.stone_to_gram();
                else if (from == "Stone" && to == "Milligram") this.stone_to_milligram();
                else if (from == "Stone" && to == "Microgram") this.stone_to_microgram();
                else if (from == "Stone" && to == "Pound") this.stone_to_pound();
                else if (from == "Stone" && to == "Ounce") this.stone_to_ounce();
                else if (from == "Pound" && to == "Tonne") this.pound_to_tonne();
                else if (from == "Pound" && to == "Kilogram") this.pound_to_kilogram();
                else if (from == "Pound" && to == "Gram") this.pound_to_gram();
                else if (from == "Pound" && to == "Milligram") this.pound_to_milligram();
                else if (from == "Pound" && to == "Microgram") this.pound_to_microgram();
                else if (from == "Pound" && to == "stone") this.pound_to_stone();
                else if (from == "Pound" && to == "Ounce") this.pound_to_ounce();
                else if (from == "Ounce" && to == "Tonne") this.ounce_to_tonne();
                else if (from == "Ounce" && to == "Kilogram") this.ounce_to_kilogram();
                else if (from == "Ounce" && to == "Gram") this.ounce_to_gram();
                else if (from == "Ounce" && to == "Milligram") this.ounce_to_milligram();
                else if (from == "Ounce" && to == "Microgram") this.ounce_to_microgram();
                else if (from == "Ounce" && to == "stone") this.ounce_to_stone();
                else if (from == "Ounce" && to == "Pound") this.ounce_to_pound();
                else if (from == "Tonne" && to == "Tonne" || from == "Kilogram" && to == "Kilogram" || from == "Gram" && to == "Pound" || from == "Ounce" && to == "Pound" || from == "Ounce" && to == "Pound" || from == "Ounce" && to == "Gram" || from == "Milligram" && to == "Milligram" || from == "Microgram" && to == "Microgram" || from == "stone" && to == "stone" || from == "Pound" && to == "Pound" || from == "Ounce" && to == "Ounce") this.same_to_same();
            } else if (this.selected == 6) {

            } else if (this.selected == 7) {
                if (from == "Celsius" && to == "Fahrenheit") this.celcius_to_fahrenheit();
                else if (from == "Celsius" && to == "Kelvin") this.celcius_to_kelvin();
                else if (from == "Fahrenheit" && to == "Celsius") this.fahrenheit_to_celcius();
                else if (from == "Fahrenheit" && to == "Kelvin") this.fahrenheit_to_kelvin();
                else if (from == "Kelvin" && to == "Celsius") this.kelvin_to_celcius();
                else if (from == "Kelvin" && to == "Fahrenheit") this.kelvin_to_fahrenheit();
                else if (from == "Celsius" && to == "Celsius" || from == "Fahrenheit" && to == "Fahrenheit" || from == "Kelvin" && to == "Kelvin") this.same_to_same();
            } else if (this.selected == 8) {

            }
        },
        same_to_same() {
            return this.result = this.input;
        },
        celcius_to_fahrenheit() {
            return this.result = (this.input * 9 / 5) + 32;
        },
        celcius_to_kelvin() {
            return this.result = parseInt(this.input) + 273.15;
        },
        fahrenheit_to_celcius() {
            return this.result = (this.input - 32) * 5 / 9;
        },
        fahrenheit_to_kelvin() {
            return this.result = (this.input - 32) * 5 / 9 + 273.15;
        },
        kelvin_to_fahrenheit() {
            return this.result = parseInt(this.input) - 273.15;
        },
        kelvin_to_celcius() {
            return this.result = (this.input - 273.15) * 9 / 5 + 32;
        },
        tonne_to_kilogram() {
            return this.result = this.input * 1000;
        },
        tonne_to_gram() {
            return this.result = this.input * 1000000;
        },
        tonne_to_milligram() {
            return this.result = this.input * 100000000;
        },
        tonne_to_microgram() {
            return this.result = this.input * 100000000000;
        },
        tonne_to_stone() {
            return this.result = this.input * 157.473;
        },
        tonne_to_pound() {
            return this.result = this.input * 2204.62;
        },
        tonne_to_ounce() {
            return this.result = this.input * 35273.962;
        },
        kilogram_to_tonne() {
            return this.result = this.input / 1000;
        },
        kilogram_to_gram() {
            return this.result = this.input * 1000;
        },
        kilogram_to_milligram() {
            return this.result = this.input * 1000000;
        },
        kilogram_to_microgram() {
            return this.result = this.input * 1000000000;
        },
        kilogram_to_stone() {
            return this.result = this.input / 6.35;
        },
        kilogram_to_pound() {
            return this.result = this.input * 2.205;
        },
        kilogram_to_ounce() {
            return this.result = this.input * 35.274;
        },
        gram_to_tonne() {
            return this.result = this.input / 1000000;
        },
        gram_to_kilogram() {
            return this.result = this.input / 1000;
        },
        gram_to_milligram() {
            return this.result = this.input * 1000;
        },
        gram_to_microgram() {
            return this.result = this.input * 1000000;
        },
        gram_to_stone() {
            return this.result = this.input / 6350.293;
        },
        gram_to_pound() {
            return this.result = this.input / 453.592;
        },
        gram_to_ounce() {
            return this.result = this.input / 28.35;
        },
        milligram_to_tonne() {
            return this.result = this.input / 1000000000;
        },
        milligram_to_kilogram() {
            return this.result = this.input / 1000000;
        },
        milligram_to_gram() {
            return this.result = this.input / 1000
        },
        milligram_to_microgram() {
            return this.result = this.input * 1000;
        },
        milligram_to_stone() {
            return this.result = this.input / 6.35000000;
        },
        milligram_to_pound() {
            return this.result = this.input / 453592.37;
        },
        milligram_to_ounce() {
            return this.result = this.input / 28349.523;
        },
        microgram_to_tonne() {
            return this.result = this.input / 1000000000000;
        },
        microgram_to_kilogram() {
            return this.result = this.input / 1000000000;
        },
        microgram_to_gram() {
            return this.result = this.input / 1000000;
        },
        microgram_to_milligram() {
            return this.result = this.input / 10000;
        },
        microgram_to_stone() {
            return this.result = this.input / 6.35000000000;
        },
        microgram_to_pound() {
            return this.result = this.input / 4.53600000000;
        },
        microgram_to_ounce() {
            return this.result = this.input / 2.8350000000;
        },
        stone_to_tonne() {
            return this.result = this.input * 157.473;
        },
        stone_to_kilogram() {
            return this.result = this.input * 6.35;
        },
        stone_to_gram() {
            return this.result = this.input * 6350.293;
        },
        stone_to_milligram() {
            return this.result = this.input * 6.35000000;
        },
        stone_to_microgram() {
            return this.result = this.input * 6.35000000000;
        },
        stone_to_pound() {
            return this.result = this.input * 14;
        },
        stone_to_ounce() {
            return this.result = this.input * 224;
        },
        pound_to_tonne() {
            return this.result = this.input / 2204.623;
        },
        pound_to_kilogram() {
            return this.result = this.input / 2.205;
        },
        pound_to_gram() {
            return this.result = this.input * 453.592;
        },
        pound_to_milligram() {
            return this.result = this.input * 453592.37;
        },
        pound_to_microgram() {
            return this.result = this.input * 4.53600000000;
        },
        pound_to_stone() {
            return this.result = this.input / 14;
        },
        pound_to_ounce() {
            return this.result = this.input * 16;
        },
        ounce_to_tonne() {
            return this.result = this.input / 35273.962;
        },
        ounce_to_kilogram() {
            return this.result = this.input / 35.274;
        },
        ounce_to_gram() {
            return this.result = this.input * 28.35;
        },
        ounce_to_milligram() {
            return this.result = this.input * 28349.523;
        },
        ounce_to_microgram() {
            return this.result = this.input * 2.8350000000;
        },
        ounce_to_stone() {
            return this.result = this.input / 224;
        },
        ounce_to_pound() {
            return this.result = this.input / 16;
        },
    }
});