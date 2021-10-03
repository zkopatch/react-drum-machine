import React, { Component } from 'react';
import './DrumPad.css';
import * as Tone from 'tone';


import Pad from '../Pad/Pad';

const DrumPad = (props) => {

    const kick = new Tone.MembraneSynth().toDestination();
    const snare = new Tone.NoiseSynth().toDestination();
    const hiHat = new Tone.MetalSynth().toDestination();
    const chord = new Tone.PolySynth().toDestination();
    const synth = new Tone.MonoSynth({
        oscillator: {
            type: "square"
        },
        envelope: {
            attack: 0.1
        }
    }).toDestination();
    const filterOption = {
        type: 'lowpass',
        frequency: 1250,
        rolloff: -12,
        Q: 5,
        gain: 0,
      };
      // const lowPass = new Filter({frequency: 11000,}).toDestination();
      const lowPass = new Tone.Filter(filterOption).toDestination();
  
      const tom = new Tone.NoiseSynth(
        {
              //volume: 16,
              noise: {
          // 'white' | 'pink' | 'brown';
                  type: 'brown',
                  playbackRate: 1,
              },
              envelope: {
                  attack: 0.01,
                  decay: 0.2,
                  sustain: 0.1,
                  release: 0.3,
              },
          }
      ).connect(lowPass);
    


    const triggerKick = () => {
        kick.triggerAttackRelease("C0", "2n");
    }

    const triggerSnare = () => {
        snare.triggerAttackRelease("8n");    
    }

    const triggerHiHat = () => {
        hiHat.triggerAttackRelease("8n");
    }

    const triggerTom = () => {
        tom.triggerAttackRelease('8n')
    }

    const triggerSynth = () => {
        synth.triggerAttackRelease("C4", "8n");
    }

    const triggerChord = () => {
        // set the attributes across all the voices using 'set'
        chord.set({ detune: -1200 });
        chord.triggerAttackRelease(["F3", "C4", "A4"], .5);
    }




    

    
    
    return(
        <div className="DrumPad">
            <Pad handleDisplay={props.handleDisplay} sound={triggerKick} title="Kick" />
            <Pad handleDisplay={props.handleDisplay} sound={triggerSnare} title="Snare" />
            <Pad handleDisplay={props.handleDisplay} sound={triggerHiHat} title="Hi-Hat" />
            <Pad handleDisplay={props.handleDisplay} sound={triggerTom} title="Tom" />
            <Pad handleDisplay={props.handleDisplay} sound={triggerSynth} title="Synth" />
            <Pad handleDisplay={props.handleDisplay} sound={triggerChord} title="Chord" />
        </div>
    );
    
}

export default DrumPad;