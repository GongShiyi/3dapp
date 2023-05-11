function Kefu(Obj) {
    console.log("");
    var cssStyle=`
            <style>
            @media screen and (min-width:769px){.kefubox{position:fixed;right:10px;z-index:99999;transform:translateY(300px);}.kefubox .main{width:50px;background:#fff;border:1px solid #f2f2f2;box-shadow:0 0 15px #e4e4e4;box-sizing:border-box;}.kefubox .cursor_default{cursor:default;}.kefubox .floor{border-bottom:1px solid #f2f2f2;position:relative;box-sizing:border-box;}
            .kefubox .floor .home{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586946606115%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%221943%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M896%20832H128V490.666667L512%20128l384%20362.666667z%22%20fill%3D%22%23E8EAF6%22%20p-id%3D%221944%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M832%20448l-106.666667-106.666667V192h106.666667zM128%20832h768v106.666667H128z%22%20fill%3D%22%23C5CAE9%22%20p-id%3D%221945%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M512%2091.733333L85.333333%20488.533333l42.666667%2046.933334L512%20179.2l384%20356.266667%2042.666667-46.933334z%22%20fill%3D%22%23B71C1C%22%20p-id%3D%221946%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M384%20597.333333h256v341.333334H384z%22%20fill%3D%22%23D84315%22%20p-id%3D%221947%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M448%20362.666667h128v128h-128z%22%20fill%3D%22%2301579B%22%20p-id%3D%221948%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M586.666667%20757.333333c-6.4%200-10.666667%204.266667-10.666667%2010.666667v42.666667c0%206.4%204.266667%2010.666667%2010.666667%2010.666666s10.666667-4.266667%2010.666666-10.666666v-42.666667c0-6.4-4.266667-10.666667-10.666666-10.666667z%22%20fill%3D%22%23FF8A65%22%20p-id%3D%221949%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}
            .kefubox .floor .tellink{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586947302970%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222086%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M187.6%20245.3l152.9%20152.9-27.9%2027.9c-5.7%205.7-6.3%2014.9-1.2%2021.2l26.5%2033.5c29.9%2037.8%2062.4%2074.3%2096.7%20108.6s70.8%2066.8%20108.6%2096.7l33.5%2026.5c6.4%205%2015.5%204.5%2021.2-1.2l27.9-27.9%20152.9%20152.9-56.2%2056.2c-2.2-1.1-4.3-2.1-6.4-3.2C591.8%20826.6%20478.4%20744.5%20379%20645c-99.4-99.4-181.6-212.8-244.3-337.1-1.1-2.1-2.2-4.3-3.2-6.4l56.1-56.2m0-83.9c-4.1%200-8.2%201.6-11.3%204.7L78%20264.4c-14.4%2014.4-18.2%2036.5-9.3%2054.9%202.9%205.9%205.8%2011.7%208.7%2017.6C141.7%20464.4%20227.1%20584%20333.6%20690.5s226.1%20191.9%20353.6%20256.2c5.8%202.9%2011.7%205.8%2017.6%208.7%206.7%203.2%2013.8%204.8%2020.9%204.8%2012.5%200%2024.8-4.9%2034-14.1l98.3-98.3c6.2-6.2%206.2-16.4%200-22.6l-220.9-221c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2%201.6-11.3%204.7l-21.6%2021.6c-5.8%205.8-15%206.3-21.4%201.1-31.7-25.7-62.3-53.3-91.8-82.7-29.4-29.4-57-60.1-82.7-91.8-5.2-6.4-4.7-15.6%201.1-21.4l21.6-21.6c6.2-6.2%206.2-16.4%200-22.6L199%20166.1c-3.2-3.2-7.3-4.7-11.4-4.7z%22%20fill%3D%22%233E3A39%22%20p-id%3D%222087%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M444.1%20362.5L223.3%20141.7c-6.2-6.2-6.2-16.4%200-22.6l50.4-50.4c6.2-6.2%2016.4-6.2%2022.6%200l220.8%20220.8c6.2%206.2%206.2%2016.4%200%2022.6l-50.4%2050.4c-6.2%206.3-16.3%206.3-22.6%200zM882.3%20800.7L661.5%20579.9c-6.2-6.2-6.2-16.4%200-22.6l50.4-50.4c6.2-6.2%2016.4-6.2%2022.6%200l220.8%20220.8c6.2%206.2%206.2%2016.4%200%2022.6l-50.4%2050.4c-6.2%206.2-16.4%206.2-22.6%200z%22%20fill%3D%22%23FF6E83%22%20p-id%3D%222088%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}
            .kefubox .floor .qqlink{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221683596571088%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222835%22%20data-immersive-translate-effect%3D%221%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M342.2%20930.1c-14.6%200-26.9-11.4-28.1-25.9l-54.4-709.1c-0.6-7.9%202-15.5%207.4-21.4%205.4-5.9%2012.8-9.1%2020.7-9.1h463.6c8%200%2015.3%203.2%2020.7%209.1%205.4%205.9%208%2013.5%207.4%2021.4l-54.4%20709.1c-1.2%2014.5-13.5%2025.9-28.1%2025.9H342.2z%22%20fill%3D%22%23212347%22%20p-id%3D%222836%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M751.4%20189.6c0.4%200%201.4%200%202.3%201%200.9%201%200.9%202%200.8%202.4v0.2l-54.3%20708.9c-0.1%201.6-1.5%202.9-3.2%202.9H342.2c-1.6%200-3-1.3-3.2-2.9l-54.3-708.9v-0.2c0-0.4-0.1-1.4%200.8-2.4s2-1%202.3-1h463.6m0-50H287.8c-31.1%200-55.5%2026.5-53%2057.5l54.4%20709.1c2.2%2027.6%2025.3%2048.9%2053%2048.9H697c27.7%200%2050.8-21.3%2053-48.9l54.4-709.1c2.5-31-21.9-57.5-53-57.5z%22%20fill%3D%22%23212347%22%20p-id%3D%222837%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M738%20373c1.6%200%203-0.3%203.2-0.7l13.3-181.4c0-0.1%200.1-0.3-0.8-0.6s-2-0.2-2.3-0.2H287.8c-0.4%200-1.4-0.1-2.3%200.2-0.9%200.3-0.9%200.5-0.8%200.6L298%20372.3c0.1%200.4%201.5%200.7%203.2%200.7H738z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%222838%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M754.1%20859.1h-469l-25-295.5h519z%22%20fill%3D%22%23D60000%22%20p-id%3D%222839%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M362%20635.8h19.4v77.6l41-39h25.1l-41.9%2039%2045.6%2055.6h-24.9l-34-43.2-10.8%2010.1V769H362V635.8zM537.5%20687.6c7.4%209.6%2011.2%2022.8%2011.3%2039.5h-71.7c0.7%209.4%203.2%2016.5%207.5%2021.2%204.5%204.9%2010.6%207.3%2018.1%207.3%206.7%200%2012.2-1.6%2016.5-4.8%203-2.3%205.9-6.4%208.6-12.3h19.4c-2.3%209-6.7%2016.4-13%2022.1-8.3%207.2-18.7%2010.8-31.3%2010.8-14%200-25.1-4.3-33.1-13-8.8-9.2-13.2-21.5-13.2-37%200-14.2%204.1-25.9%2012.4-35.3%208.1-9.6%2019.1-14.5%2033.1-14.5%2015.7%200.2%2027.4%205.5%2035.4%2016z%20m-52.2%206.6c-4.1%204.4-6.8%2010.5-7.9%2018.3h51.1c-1.8-16.5-10.4-24.7-25.8-24.7-7.3-0.1-13.1%202.1-17.4%206.4zM567.5%20635.8h19.4V769h-19.4V635.8zM686.4%20687.6c7.4%209.6%2011.2%2022.8%2011.3%2039.5H626c0.7%209.4%203.2%2016.5%207.5%2021.2%204.5%204.9%2010.6%207.3%2018.1%207.3%206.7%200%2012.2-1.6%2016.5-4.8%203-2.3%205.9-6.4%208.6-12.3h19.4c-2.3%209-6.7%2016.4-13%2022.1-8.3%207.2-18.7%2010.8-31.3%2010.8-14%200-25.1-4.3-33.1-13-8.8-9.2-13.2-21.5-13.2-37%200-14.2%204.1-25.9%2012.4-35.3%208.1-9.6%2019.1-14.5%2033.1-14.5%2015.7%200.2%2027.5%205.5%2035.4%2016z%20m-52.1%206.6c-4.1%204.4-6.8%2010.5-7.9%2018.3h51.1c-1.8-16.5-10.4-24.7-25.8-24.7-7.4-0.1-13.1%202.1-17.4%206.4z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%222840%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M588.5%20446.8c-3.7%200-7.5-0.8-11.1-2.6-12.4-6.1-17.5-21.1-11.3-33.5L729.9%2079.1c3.1-6.2%208.6-10.9%2015.3-12.9%206.7-2%2013.9-1.1%2019.9%202.5l116.8%2069.4c11.9%207.1%2015.8%2022.4%208.7%2034.3-7.1%2011.9-22.4%2015.8-34.3%208.7l-93.5-55.6-151.9%20307.3c-4.4%208.9-13.2%2014-22.4%2014z%22%20fill%3D%22%23212347%22%20p-id%3D%222841%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}
            .kefubox .floor .wechatimg{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221683597577144%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%223025%22%20data-immersive-translate-effect%3D%221%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M643.2%20833.6c-2.4-45.6%2024-124%2024-253.6%200-36-9.6-106.4-46.4-178.4C565.6%20291.2%20576%20112%20576%20112H448s10.4%20179.2-45.6%20289.6c-36.8%2072-46.4%20142.4-46.4%20178.4%200%20129.6%2027.2%20208%2024%20253.6-2.4%2039.2-17.6%2068-24.8%20112.8-4%2024%2015.2%2046.4%2039.2%2046.4H628.8c24.8%200%2043.2-22.4%2039.2-46.4-7.2-44.8-22.4-73.6-24.8-112.8z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%223026%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M668%20945.6c-7.2-44-22.4-73.6-24.8-112.8-2.4-45.6%2024-124%2024-253.6%200-36-15.2-104-46.4-178.4-32-62.4-42.4-172-44.8-233.6H496l-4.8%2093.6c-0.8%2023.2-47.2-20-51.2%208-6.4%2045.6-18.4%2092.8-37.6%20132-30.4%2074.4-46.4%20142.4-46.4%20178.4%200%20129.6%2027.2%20208%2024%20253.6-2.4%2039.2-17.6%2068-24.8%20112.8-4%2024%2015.2%2046.4%2039.2%2046.4H628.8c24.8%200%2043.2-22.4%2039.2-46.4z%22%20fill%3D%22%2370E7D2%22%20p-id%3D%223027%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M643.2%20833.6c-2.4-45.6%2024-124%2024-253.6%200-36-9.6-106.4-46.4-178.4l-25.6-63.2H428.8l-25.6%2063.2c-36.8%2072-46.4%20142.4-46.4%20178.4%200%20129.6%2027.2%20208%2024%20253.6-2.4%2039.2-17.6%2068-24.8%20112.8-4%2024%2015.2%2046.4%2039.2%2046.4H628.8c24.8%200%2043.2-22.4%2039.2-46.4-7.2-44.8-22.4-73.6-24.8-112.8z%22%20fill%3D%22%23FFA869%22%20p-id%3D%223028%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M482.4%20968H388.8c-13.6%200-24-10.4-24-24s10.4-24%2024-24h93.6c13.6%200%2024%2010.4%2024%2024s-10.4%2024-24%2024z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%223029%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M668%20945.6c-7.2-44-22.4-73.6-24.8-112.8-2.4-45.6%2024-124%2024-253.6%200-32.8-8-92.8-36-156.8-5.6-13.6-19.2-21.6-33.6-21.6-25.6%200-44%2025.6-35.2%2049.6%2019.2%2053.6%2024.8%20101.6%2024.8%20128.8%200%20129.6-27.2%20208-24%20253.6%202.4%2039.2%2017.6%2068%2024.8%20112.8%204%2024%2040.8%2046.4%2040.8%2046.4%2024.8%200%2043.2-22.4%2039.2-46.4z%22%20fill%3D%22%23F77C3F%22%20p-id%3D%223030%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M356.8%20580c0%2052%204%2095.2%209.6%20132h292c4.8-36.8%209.6-80%209.6-132%200-24-4-63.2-17.6-108H374.4c-13.6%2044.8-17.6%2084-17.6%20108z%22%20fill%3D%22%2370E9D4%22%20p-id%3D%223031%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M649.6%20472h-80c13.6%2044.8%2017.6%2084%2017.6%20108%200%2052-4%2095.2-9.6%20132h80c4.8-36.8%209.6-80%209.6-132%200-24-4-63.2-17.6-108z%22%20fill%3D%22%23009F96%22%20p-id%3D%223032%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M628.8%201016H395.2c-19.2%200-36.8-8-48.8-22.4-12-14.4-17.6-32.8-14.4-51.2%203.2-20.8%208.8-38.4%2012.8-54.4%205.6-19.2%2010.4-36%2012-55.2%200.8-16-2.4-39.2-7.2-68.8-7.2-44-16.8-104.8-16.8-183.2%200-45.6%2012.8-118.4%2048.8-189.6%2020-38.4%2032.8-80%2039.2-124%201.6-12.8%2014.4-22.4%2027.2-20%2012.8%201.6%2022.4%2014.4%2020%2027.2-7.2%2048.8-22.4%2095.2-44%20138.4-41.6%2081.6-43.2%20153.6-43.2%20168%200%2074.4%208.8%20130.4%2016%20175.2%204.8%2032%209.6%2057.6%208%2079.2-1.6%2024.8-7.2%2045.6-13.6%2065.6-4%2015.2-8.8%2031.2-12%2048.8-0.8%206.4%201.6%2010.4%203.2%2012.8%201.6%202.4%205.6%205.6%2012%205.6h233.6c6.4%200%2010.4-3.2%2012-5.6%201.6-2.4%204.8-6.4%203.2-12.8-3.2-18.4-7.2-33.6-12-48.8-5.6-20-12-41.6-13.6-65.6-1.6-21.6%202.4-46.4%208-79.2%207.2-44.8%2016-101.6%2016-175.2%200-13.6-2.4-86.4-43.2-168-58.4-115.2-48-218.4-48-223.2%201.6-12.8%2013.6-22.4%2026.4-21.6%2012.8%201.6%2022.4%2013.6%2021.6%2026.4%200%200.8-8.8%2094.4%2043.2%20196%2036%2070.4%2048.8%20144%2048.8%20189.6%200%2078.4-9.6%20139.2-16.8%20183.2-4.8%2029.6-8.8%2052.8-7.2%2068.8%200.8%2019.2%206.4%2036%2012%2055.2%204.8%2016%209.6%2033.6%2012.8%2054.4%203.2%2018.4-2.4%2037.6-14.4%2051.2-11.2%2015.2-28.8%2023.2-48%2023.2z%22%20fill%3D%22%233F4A54%22%20p-id%3D%223033%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M576%20144H448c-13.6%200-24-10.4-24-24s10.4-24%2024-24h128c13.6%200%2024%2010.4%2024%2024s-10.4%2024-24%2024z%22%20fill%3D%22%23FFA869%22%20p-id%3D%223034%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M576%20144h-32c-13.6%200-24-10.4-24-24s10.4-24%2024-24h32c13.6%200%2024%2010.4%2024%2024s-10.4%2024-24%2024z%22%20fill%3D%22%23F77C3F%22%20p-id%3D%223035%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M560.8%20612H404.8c-13.6%200-24-10.4-24-24s10.4-24%2024-24h156c13.6%200%2024%2010.4%2024%2024s-11.2%2024-24%2024z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%223036%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M420%20776c-11.2%200-21.6-8.8-24-20-2.4-12.8-4-25.6-6.4-40-4-30.4-9.6-76.8-9.6-135.2%200-33.6%208-76.8%2021.6-116%206.4-17.6%2013.6-35.2%2021.6-52%205.6-11.2%2010.4-22.4%2015.2-33.6%209.6-22.4%2016.8-46.4%2021.6-72%204.8-25.6%207.2-52%207.2-82.4V144h88v24h-40v56c0%2033.6-2.4%2063.2-8%2092-5.6%2028-13.6%2055.2-24%2080.8-4.8%2012.8-11.2%2024.8-16.8%2037.6-7.2%2014.4-13.6%2029.6-19.2%2045.6-17.6%2051.2-19.2%2089.6-19.2%20100%200%2054.4%204.8%2097.6%209.6%20128.8%201.6%2014.4%204%2027.2%206.4%2039.2%202.4%2012.8-7.2%2025.6-20%2027.2-0.8%200.8-2.4%200.8-4%200.8z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%223037%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M752%201016H623.2c-13.6%200-24-10.4-24-24s10.4-24%2024-24H752c13.6%200%2024%2010.4%2024%2024s-10.4%2024-24%2024z%22%20fill%3D%22%233F4A54%22%20p-id%3D%223038%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M872%201016c-6.4%200-12.8-2.4-16.8-7.2-4.8-4.8-7.2-10.4-7.2-16.8s2.4-12.8%207.2-16.8c5.6-5.6%2013.6-8%2021.6-6.4%201.6%200%203.2%200.8%204.8%201.6%201.6%200.8%203.2%201.6%204%202.4%201.6%200.8%202.4%201.6%203.2%203.2%204.8%204.8%207.2%2010.4%207.2%2016.8%200%201.6%200%203.2-0.8%204.8%200%201.6-0.8%203.2-1.6%204.8-0.8%201.6-1.6%203.2-2.4%204-0.8%201.6-1.6%202.4-3.2%203.2l-3.2%203.2c-1.6%200.8-2.4%201.6-4%202.4-1.6%200.8-3.2%200.8-4.8%201.6-0.8-0.8-2.4-0.8-4-0.8z%22%20fill%3D%22%233F4A54%22%20p-id%3D%223039%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M426.4%20858.4m-24%200a24%2024%200%201%200%2048%200%2024%2024%200%201%200-48%200Z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%223040%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}
            .kefubox .floor .erweimaimg{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221683597713116%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%225090%22%20data-immersive-translate-effect%3D%221%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M754.06%20474c-0.93%2024.79-6.58%2059.51-13.41%2081.13%200%200-67.84%20272.5-268.15%20272.5-205.1%200.03-288.5-273.12-288.5-273.12-9.08-23.19-15.75-62.37-15.75-87.24V230.81a22.61%2022.61%200%200%201%2022.61-22.61h297.4z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%225091%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M740.65%20555.16s-152.07%20272.5-268.15%20272.5-187.08-273.15-187.08-273.15c-9.08-23.19-15.75-62.37-15.75-87.24V230.81a22.61%2022.61%200%200%201%2022.61-22.61h196a226.19%20226.19%200%200%200-4.51%2045.05c0%20124.41%20100.9%20225.26%20225.36%20225.26a226.49%20226.49%200%200%200%2044.93-4.51c-0.92%2024.82-6.57%2059.54-13.41%2081.16z%22%20fill%3D%22%23E7D8FF%22%20p-id%3D%225092%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M432.19%20817.23q114.48-132%20108.19-343.79-1.05-35.47-1.86-73A225.83%20225.83%200%200%200%20754.06%20474c-0.93%2024.79-6.58%2059.51-13.41%2081.13%200%200-95.5%20272.5-268.15%20272.5-13.64%200.03-27.13-3.74-40.31-10.4z%22%20fill%3D%22%23C15BFF%22%20p-id%3D%225093%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M147.79%20467.27V230.81a43.09%2043.09%200%200%201%2043.09-43.09h297.4v41h-297.4a2.13%202.13%200%200%200-2.13%202.13v236.42c0%2023.19%206.47%2059.7%2014.33%2079.77%201.08%203.32%202.3%207%204.19%2012.29%203.21%209%207.14%2019%2011.79%2029.77a542.77%20542.77%200%200%200%2049.22%2090.47c54.66%2080.3%20122.4%20127.62%20204.23%20127.62%2079.35%200%20142.63-46.82%20191.76-126.52a512.24%20512.24%200%200%200%2043.46-90.06c4-10.76%207.33-20.73%2010-29.65%201.59-5.26%202.59-8.93%203-10.75%206.54-20.83%2011.95-53.69%2012.82-76.95l40.93%201.53c-1%2026.58-6.91%2062.69-14.16%2085.94-0.64%202.52-1.77%206.6-3.41%2012-2.93%209.71-6.53%2020.5-10.83%2032.09a552.58%20552.58%200%200%201-47%2097.29c-55.86%2090.61-130.7%20146-226.63%20146-97.59%200.03-176.45-55.11-238.03-145.5a583.15%20583.15%200%200%201-53-97.33c-5-11.61-9.23-22.4-12.72-32.12-1.92-5.35-3.27-9.38-4.06-11.91-9.64-25.06-16.85-66.1-16.85-93.98z%22%20fill%3D%22%22%20p-id%3D%225094%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M461.23%20827.66h33.8v157.68h-33.8z%22%20fill%3D%22%23E7D8FF%22%20p-id%3D%225095%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M520.38%201000.84H407.74V806.27h112.64z%20m-71.68-41h30.72V847.23H448.7z%22%20fill%3D%22%22%20p-id%3D%225096%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M305.34%20970.12h337.92a20.48%2020.48%200%200%201%2020.48%2020.48%2020.48%2020.48%200%200%201-20.48%2020.48H305.34a20.48%2020.48%200%200%201-20.48-20.48%2020.48%2020.48%200%200%201%2020.48-20.48zM448.7%20612.73a52.23%2052.23%200%201%201%2052.22-52.23%2052.28%2052.28%200%200%201-52.22%2052.23z%20m0-81.92a29.7%2029.7%200%201%200%2029.7%2029.7%2029.73%2029.73%200%200%200-29.7-29.71zM450%20681.25a22.53%2022.53%200%201%201%2022.53-22.53A22.55%2022.55%200%200%201%20450%20681.25z%20m0-22.53zM450%20771.35a22.53%2022.53%200%201%201%2022.53-22.53A22.55%2022.55%200%200%201%20450%20771.35z%20m0-22.53z%22%20fill%3D%22%22%20p-id%3D%225097%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M706.11%20478.5c-89.87-29.62-154.73-114.22-154.73-214%200-124.41%20100.9-225.26%20225.36-225.26h3c89.87%2029.62%20154.73%20114.22%20154.73%20214%200%20124.41-100.9%20225.26-225.36%20225.26z%22%20fill%3D%22%23D1FF02%22%20p-id%3D%225098%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M709.13%20501A247.76%20247.76%200%200%201%20533.85%2078%20247.84%20247.84%200%201%201%20884.4%20428.47%20246.32%20246.32%200%200%201%20709.13%20501z%20m0-450.51c-111.84%200-202.83%2090.94-202.83%20202.73S597.29%20456%20709.13%20456%20912%20365%20912%20253.26%20821%2050.53%20709.13%2050.53z%22%20fill%3D%22%22%20p-id%3D%225099%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M696.33%20227.9l-40.69-125.2%2018.44-5.98%2040.68%20125.19%2040.71-125.2%2018.43%205.98-40.7%20125.2%20106.55-77.38%2011.39%2015.67-106.55%2077.39%20131.69-0.01v19.37l-131.69%200.01%20106.53%2077.37-11.39%2015.67-106.54-77.36%2040.69%20125.19-18.44%205.99-40.68-125.19-40.71%20125.2-18.43-5.99%2040.7-125.2-106.55%2077.39-11.39-15.68%20106.55-77.38-131.69%200.01v-19.37l131.69-0.02-106.53-77.36%2011.39-15.68%20106.54%2077.37z%22%20fill%3D%22%22%20p-id%3D%225100%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}
            .kefubox .floor > div{transform:translateX(300px);}.kefubox .floor:hover div{transition:all 300ms linear;transform:translateX(0);}.kefubox .floor .absbox{position:absolute;right:48px;top:0;z-index:3;}.kefubox .floor .back{box-shadow:0 0 15px #e4e4e4;height:50px;width:120px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#666;background:#fff;box-sizing:border-box;}.kefubox .floor .kftel{cursor:default;box-shadow:0 0 15px #e4e4e4;height:50px;font-weight:500;width:120px;display:flex;align-items:center;justify-content:center;font-size:16px;color:#666;background:#fff;box-sizing:border-box;}.kefubox .floor .qq{box-shadow:0 0 15px #e4e4e4;height:50px;width:120px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#666;background:#fff;box-sizing:border-box;}.kefubox .floor .erweima{box-shadow:0 0 15px #e4e4e4;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:15px;font-size:12px;color:#666;background:#fff;box-sizing:border-box;}.kefubox .floor .erweima img{width:100px;height:100px;}.kefubox .floor .erweima p{width:100px;padding:5px 0;display:flex;align-items:center;justify-content:center;font-size:12px;}.kefubox .floor > a{width:50px;height:50px;z-index:9999;background-position:center center;background-size:25px 25px;background-repeat:no-repeat;display:flex;align-items:center;justify-content:center;}.kefubox .floor > a:hover{transition:all 300ms linear;background-color:#e4e4e4;transform:scale(1.1);}.kefubox .floor > a img{height:25px;width:25px;display:block;}.kefubox .floor > a img:hover{transition:all 300ms linear;transform:scale(1.3);}.kefubox .floor:last-child{border-bottom:none;}}@media screen and (max-width:768px){.kefubox{position:fixed;right:2vw;top:45vh;z-index:99999}.kefubox .floor{display:none;}.kefubox .tel{box-shadow:0 0 5px #ddd;width:10vw;height:10vw;background-color:#fff;background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586947302970%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222086%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M187.6%20245.3l152.9%20152.9-27.9%2027.9c-5.7%205.7-6.3%2014.9-1.2%2021.2l26.5%2033.5c29.9%2037.8%2062.4%2074.3%2096.7%20108.6s70.8%2066.8%20108.6%2096.7l33.5%2026.5c6.4%205%2015.5%204.5%2021.2-1.2l27.9-27.9%20152.9%20152.9-56.2%2056.2c-2.2-1.1-4.3-2.1-6.4-3.2C591.8%20826.6%20478.4%20744.5%20379%20645c-99.4-99.4-181.6-212.8-244.3-337.1-1.1-2.1-2.2-4.3-3.2-6.4l56.1-56.2m0-83.9c-4.1%200-8.2%201.6-11.3%204.7L78%20264.4c-14.4%2014.4-18.2%2036.5-9.3%2054.9%202.9%205.9%205.8%2011.7%208.7%2017.6C141.7%20464.4%20227.1%20584%20333.6%20690.5s226.1%20191.9%20353.6%20256.2c5.8%202.9%2011.7%205.8%2017.6%208.7%206.7%203.2%2013.8%204.8%2020.9%204.8%2012.5%200%2024.8-4.9%2034-14.1l98.3-98.3c6.2-6.2%206.2-16.4%200-22.6l-220.9-221c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2%201.6-11.3%204.7l-21.6%2021.6c-5.8%205.8-15%206.3-21.4%201.1-31.7-25.7-62.3-53.3-91.8-82.7-29.4-29.4-57-60.1-82.7-91.8-5.2-6.4-4.7-15.6%201.1-21.4l21.6-21.6c6.2-6.2%206.2-16.4%200-22.6L199%20166.1c-3.2-3.2-7.3-4.7-11.4-4.7z%22%20fill%3D%22%233E3A39%22%20p-id%3D%222087%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M444.1%20362.5L223.3%20141.7c-6.2-6.2-6.2-16.4%200-22.6l50.4-50.4c6.2-6.2%2016.4-6.2%2022.6%200l220.8%20220.8c6.2%206.2%206.2%2016.4%200%2022.6l-50.4%2050.4c-6.2%206.3-16.3%206.3-22.6%200zM882.3%20800.7L661.5%20579.9c-6.2-6.2-6.2-16.4%200-22.6l50.4-50.4c6.2-6.2%2016.4-6.2%2022.6%200l220.8%20220.8c6.2%206.2%206.2%2016.4%200%2022.6l-50.4%2050.4c-6.2%206.2-16.4%206.2-22.6%200z%22%20fill%3D%22%23FF6E83%22%20p-id%3D%222088%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");background-size:6vw 6vw;background-repeat:no-repeat;background-position:center center;display:flex;}.kefubox .tel:active{background-color:#f2f2f2;}.kefubox .tel .kftel{display:none;}}     
            </style>`;
    if(Obj.qq.state==true){
        var qq="<div onclick='jumpModel(1)' class=\"floor\">"+
            "                <a class=\"qqlink cursor_default\" >"+
            "                </a>"+
            "                <div class=\"absbox\">"+
            "                    <div class=\"erweima\">"+
            "                        <img src=\""+Obj.qq.imgURL+"\" alt=\"\">"+
            "                        <p>可乐模型</p>"+
            "                    </div>"+
            "                </div>"+
            "            </div>";
    }else{
        var qq="";
    }

    if(Obj.wechatPerson.state==true){
        var wechatPerson="<div onclick='jumpModel(2)' class=\"floor\">"+
        "                <a class=\"wechatimg cursor_default\" >"+
        "                </a>"+
        "                <div class=\"absbox\">"+
        "                    <div class=\"erweima\">"+
        "                        <img src=\""+Obj.wechatPerson.imgURL+"\" alt=\"\">"+
        "                        <p>芬达模型</p>"+
        "                    </div>"+
        "                </div>"+
        "            </div>";
    }else{
        var wechatPerson="";
    }

    if(Obj.wechatofficial.state==true){
        var wechatofficial="<div onclick='jumpModel(3)' class=\"floor\">"+
        "                <a  class=\"erweimaimg cursor_default\" >"+
        "                </a>"+
        "                <div class=\"absbox\">"+
        "                    <div class=\"erweima\">"+
        "                        <img src=\""+Obj.wechatofficial.imgURL+"\" alt=\"\">"+
        "                        <p>怡泉模型</p>"+
        "                    </div></div>";
    }else{
        var wechatofficial="";
    }


    var kefuHtml="<div class=\"kefubox\">"+
    "        <div class=\"main\">"+
    "            <div class=\"floor\">"+
    "                <a href=\""+Obj.index+"\"  class=\"home\">"+
    "                </a>"+
    "                <div class=\"absbox\">"+
    "                    <div class=\"back\">"+
    "                        返回首页"+
    "                    </div>"+
    "                </div>"+
    "            </div>"+
    "            <div class=\"floor tel\">"+
    "                <a href=\"https://www.coca-cola.co.uk/our-business/faqs\" class=\"tellink cursor_default\" >"+
    "                </a>"+
    "                <div class=\"absbox\">"+
    "                    <div class=\"kftel\">"+Obj.tel+"</div>"+
    "                </div>"+
    "            </div>"+qq+wechatPerson+wechatofficial+
    "            </div>"+
    "        </div>"+
    "    </div>";
    document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin', cssStyle + kefuHtml);
    let cursor = document.querySelector('.cursor_default');
}

