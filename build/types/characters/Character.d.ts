import * as THREE from 'three';
import * as CANNON from 'cannon';
import * as Utils from '../core/Utilities';
import { KeyBinding } from '../core/KeyBinding';
import { SBObject } from '../objects/SBObject';
import { VectorSpringSimulator } from '../simulation/VectorSpringSimulator';
import { RelativeSpringSimulator } from '../simulation/RelativeSpringSimulator';
import { ICharacterAI } from '../interfaces/ICharacterAI';
import { World } from '../core/World';
import { IControllable } from '../interfaces/IControllable';
import { ICharacterState } from '../interfaces/ICharacterState';
export declare class Character extends THREE.Object3D implements IControllable {
    isCharacter: boolean;
    height: number;
    modelOffset: THREE.Vector3;
    visuals: THREE.Group;
    modelContainer: THREE.Group;
    characterModel: THREE.Mesh;
    mixer: THREE.AnimationMixer;
    animations: any[];
    acceleration: THREE.Vector3;
    velocity: THREE.Vector3;
    arcadeVelocityInfluence: THREE.Vector3;
    velocityTarget: THREE.Vector3;
    arcadeVelocityIsAdditive: boolean;
    defaultVelocitySimulatorDamping: number;
    defaultVelocitySimulatorMass: number;
    velocitySimulator: VectorSpringSimulator;
    moveSpeed: number;
    angularVelocity: number;
    orientation: THREE.Vector3;
    orientationTarget: THREE.Vector3;
    defaultRotationSimulatorDamping: number;
    defaultRotationSimulatorMass: number;
    rotationSimulator: RelativeSpringSimulator;
    viewVector: THREE.Vector3;
    actions: {
        [action: string]: KeyBinding;
    };
    characterCapsule: SBObject;
    rayResult: CANNON.RaycastResult;
    rayHasHit: boolean;
    rayCastLength: number;
    raySafeOffset: number;
    wantsToJump: boolean;
    initJumpSpeed: number;
    groundImpactData: Utils.GroundImpactData;
    controllingCharacter: Character;
    controlledObject: IControllable;
    raycastBox: THREE.Mesh;
    charState: ICharacterState;
    behaviour: ICharacterAI;
    world: World;
    constructor(options: {});
    setAnimations(animations: []): void;
    setModel(model: THREE.Mesh): void;
    setArcadeVelocityInfluence(x: number, y?: number, z?: number): void;
    setModelOffset(offset: THREE.Vector3): void;
    setViewVector(vector: THREE.Vector3): void;
    /**
     * Set state to the player. Pass state class (function) name.
     * @param {function} State
     */
    setState(State: any): void;
    setPosition(x: number, y: number, z: number): void;
    setArcadeVelocity(velZ: number, velX?: number, velY?: number): void;
    setArcadeVelocityTarget(velZ: number, velX?: number, velY?: number): void;
    setOrientationTarget(vector: THREE.Vector3): void;
    setBehaviour(behaviour: ICharacterAI): void;
    handleKeyboardEvent(event: KeyboardEvent, code: string, pressed: boolean): void;
    handleMouseButton(event: MouseEvent, code: string, pressed: boolean): void;
    handleMouseMove(event: MouseEvent, deltaX: number, deltaY: number): void;
    handleMouseWheel(event: WheelEvent, value: number): void;
    triggerAction(actionName: string, value: boolean): void;
    takeControl(): void;
    resetControls(): void;
    update(timeStep: number, options?: {}): void;
    inputReceiverInit(): void;
    inputReceiverUpdate(timeStep: number): void;
    setAnimation(clipName: string, fadeIn: number): void;
    springMovement(timeStep: number): void;
    springRotation(timeStep: number, RotationMultiplier: number): void;
    getLocalMovementDirection(): THREE.Vector3;
    getCameraRelativeMovementVector(): THREE.Vector3;
    setCameraRelativeOrientationTarget(): void;
    rotateModel(): void;
    jump(initJumpSpeed?: number): void;
    physicsPreStep(body: CANNON.Body, character: Character): void;
    physicsPostStep(body: CANNON.Body, character: Character): void;
    addToWorld(world: World): void;
    removeFromWorld(world: World): void;
}