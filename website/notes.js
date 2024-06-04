VexFlow.loadFonts('Bravura', 'Academico').then(() => {
    VexFlow.setFonts('Bravura', 'Academico');
    const { Factory } = VexFlow;
    const vf = new Factory({
      renderer: { elementId: 'output', width: 1000, height: 600 },
    });
  
    const context = vf.getContext();
  
    function createSystem(x, y, width, notes) {
      const system = vf.System({ x: x, y: y, width: width, spaceBetweenStaves: 10 });
      const voice = vf.Voice().addTickables(notes);
      system.addStave({
        voices: [voice],
      }).addClef('treble').addTimeSignature('4/4');
    }
  
    const notesRow1_1 = [
      vf.StaveNote({ keys: ['c/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['d/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['e/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['f/4'], duration: 'q' })
    ];
  
    const notesRow1_2 = [
      vf.StaveNote({ keys: ['g/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['a/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['b/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['c/5'], duration: 'q' })
    ];
  
    createSystem(10, 20, 350, notesRow1_1);
    createSystem(350, 20, 350, notesRow1_2);
  
    const notesRow2_1 = [
      vf.StaveNote({ keys: ['c/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['d/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['e/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['f/5'], duration: 'q' })
    ];
  
    const notesRow2_2 = [
      vf.StaveNote({ keys: ['g/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['a/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['b/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['c/6'], duration: 'q' })
    ];
  
    createSystem(10, 220, 350, notesRow2_1);
    createSystem(350, 220, 350, notesRow2_2);
  
    const notesRow3_1 = [
      vf.StaveNote({ keys: ['c/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['e/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['g/4'], duration: 'q' }),
      vf.StaveNote({ keys: ['c/5'], duration: 'q' })
    ];
  
    const notesRow3_2 = [
      vf.StaveNote({ keys: ['d/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['f/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['a/5'], duration: 'q' }),
      vf.StaveNote({ keys: ['d/6'], duration: 'q' })
    ];
  
    createSystem(10, 420, 350, notesRow3_1);
    createSystem(350, 420, 350, notesRow3_2);
  
    vf.draw();
  });