interface Range {
  X_b: number;
  X_a: number;
  I_b: number;
  I_a: number;
}

const pollutantRanges: { [key: string]: Range[] } = {
  PM10: [
    { X_b: 0, X_a: 50, I_b: 0, I_a: 50 },
    { X_b: 51, X_a: 150, I_b: 51, I_a: 100 },
    { X_b: 151, X_a: 350, I_b: 101, I_a: 200 },
    { X_b: 351, X_a: 420, I_b: 201, I_a: 300 },
    { X_b: 421, X_a: 500, I_b: 301, I_a: 500 }
  ],
  PM25: [
    { X_b: 0, X_a: 15.5, I_b: 0, I_a: 50 },
    { X_b: 15.5, X_a: 55.4, I_b: 51, I_a: 100 },
    { X_b: 55.5, X_a: 150.4, I_b: 101, I_a: 200 },
    { X_b: 150.5, X_a: 250.4, I_b: 201, I_a: 300 },
    { X_b: 250.5, X_a: 1200, I_b: 301, I_a: 500 }
  ],
  SO2: [
    { X_b: 0, X_a: 52, I_b: 0, I_a: 50 },
    { X_b: 53, X_a: 180, I_b: 51, I_a: 100 },
    { X_b: 181, X_a: 400, I_b: 101, I_a: 200 },
    { X_b: 401, X_a: 800, I_b: 201, I_a: 300 },
    { X_b: 801, X_a: 1200, I_b: 301, I_a: 500 }
  ],
  CO: [
    { X_b: 0, X_a: 4000, I_b: 0, I_a: 50 },
    { X_b: 4000, X_a: 15000, I_b: 51, I_a: 100 },
    { X_b: 15001, X_a: 30000, I_b: 101, I_a: 200 },
    { X_b: 30001, X_a: 45000, I_b: 201, I_a: 300 },
    { X_b: 45001, X_a: 100000, I_b: 301, I_a: 500 }
  ],
  O3: [
    { X_b: 0, X_a: 120, I_b: 0, I_a: 50 },
    { X_b: 121, X_a: 235, I_b: 51, I_a: 100 },
    { X_b: 236, X_a: 400, I_b: 101, I_a: 200 },
    { X_b: 401, X_a: 800, I_b: 201, I_a: 300 },
    { X_b: 801, X_a: 1000, I_b: 301, I_a: 500 }
  ],
  NO2: [
    { X_b: 0, X_a: 80, I_b: 0, I_a: 50 },
    { X_b: 81, X_a: 200, I_b: 51, I_a: 100 },
    { X_b: 201, X_a: 1130, I_b: 101, I_a: 200 },
    { X_b: 1131, X_a: 2260, I_b: 201, I_a: 300 },
    { X_b: 2261, X_a: 3000, I_b: 301, I_a: 500 }
  ],
};

function calculateISPUForPollutant(X_x: number, ranges: Range[]): number {
  if (X_x < 0) return 0;
  for (const range of ranges) {
    if (X_x <= range.X_a) {
      return ((range.I_a - range.I_b) / (range.X_a - range.X_b)) * (X_x - range.X_b) + range.I_b;
    }
  }
  return ranges[ranges.length - 1].I_a;
}

interface ISPUResult {
  ispu_realtime: number;
  high_params: string;
}

export function calculateISPU(pm10: number, pm25: number, co: number, so2: number, no2: number, o3: number): ISPUResult {
  const ispuValues = {
    PM10: calculateISPUForPollutant(pm10, pollutantRanges.PM10),
    PM25: calculateISPUForPollutant(pm25, pollutantRanges.PM25),
    SO2: calculateISPUForPollutant(so2, pollutantRanges.SO2),
    CO: calculateISPUForPollutant(co, pollutantRanges.CO),
    O3: calculateISPUForPollutant(o3, pollutantRanges.O3),
    NO2: calculateISPUForPollutant(no2, pollutantRanges.NO2),
  };

  let ispu_realtime = -Infinity;
  let high_params = '';
  // console.log(ispuValues)

  for (const [pollutant, ispu] of Object.entries(ispuValues)) {
    if (ispu > ispu_realtime) {
      ispu_realtime = ispu;
      high_params = pollutant;
    }
  }

  return { ispu_realtime, high_params };
}