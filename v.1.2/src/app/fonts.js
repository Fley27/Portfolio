import {Raleway, Quicksand, Poppins} from "next/font/google";

export const raleway = Raleway({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-raleway'
})

export  const poppins = Poppins({
    subsets: ['latin'],
    weight: [ '200', '300', '400', '500', '600', '700', '800', '900' ],
    display: 'swap',
    variable: '--font-poppins'
})


export  const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-quicksand'
})
