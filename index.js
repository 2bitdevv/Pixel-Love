    const grid = document.getElementById('grid');
    const cols = 90;
    const rows = 7;

    // สร้างช่องกริดทั้งหมด
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      grid.appendChild(cell);
    }

    const cells = grid.children;

    const letters = {
      "I": [
        "01110",
        "00100",
        "00100",
        "00100",
        "00100",
        "00100",
        "01110"
      ],
      "L": [
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "11111"
      ],
      "O": [
        "01110",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01110"
      ],
      "V": [
        "10001",
        "10001",
        "10001",
        "10001",
        "01010",
        "01010",
        "00100"
      ],
      "E": [
        "11111",
        "10000",
        "10000",
        "11110",
        "10000",
        "10000",
        "11111"
      ],
      "Y": [
        "10001",
        "10001",
        "01010",
        "00100",
        "00100",
        "00100",
        "00100"
      ],
      "U": [
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01110"
      ],
      " ": [
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
        "00000"
      ],
      "♥": [
        "01010",
        "11111",
        "11111",
        "11111",
        "01110",
        "00100",
        "00000"
      ]
    };

    const message = "I LOVE YOU ♥";
    const pixelDelay = 50; // ความเร็วแต่ละจุด

    // สร้าง pixel map
    let pixelMap = [];
    let offset = 0;

    for (const char of message) {
      const bitmap = letters[char] || letters[" "];
      for (let y = 0; y < 7; y++) {
        for (let x = 0; x < 5; x++) {
          if (bitmap[y][x] === '1') {
            const index = y * cols + offset + x;
            pixelMap.push(index);
          }
        }
      }
      offset += 6; // ระยะห่างอักษร
    }

    // แสดงผลทีละจุด
    let i = 0;
    function revealNextPixel() {
      if (i < pixelMap.length) {
        const index = pixelMap[i];
        if (cells[index]) {
          cells[index].classList.add('active');
        }
        i++;
        setTimeout(revealNextPixel, pixelDelay);
      }
    }

    revealNextPixel();
