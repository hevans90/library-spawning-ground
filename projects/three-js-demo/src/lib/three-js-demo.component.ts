import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as Three from 'three';
const OrbitControls = require('three-orbit-controls')(Three);

@Component({
  selector: 'threeJsDemo-dropdown',
  template: `
  <div #canvas>
  </div>
  `,
  styles: [],
})
export class ThreeJsDemoComponent implements AfterViewInit {
  public scene: Three.Scene;
  public camera: Three.PerspectiveCamera;
  public renderer: Three.WebGLRenderer = new Three.WebGLRenderer({
    alpha: false,
  });
  public cube: Three.Mesh;
  public light: Three.PointLight;
  @ViewChild('canvas') private canvasRef: ElementRef;

  public orbitals: Three.OrbitControls;

  constructor() {
    this.scene = new Three.Scene();
    this.scene.background = new Three.Color('#F8F8F8');
    this.camera = new Three.PerspectiveCamera(75, 16 / 9, 0.1, 10000);
    this.camera.position.z = 800;
    this.orbitals = new OrbitControls(this.camera, this.renderer.domElement);

    const geometry = new Three.BoxGeometry(500, 200, 200);
    const material = new Three.MeshPhongMaterial({
      color: 'red',
    });
    this.cube = new Three.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.light = new Three.PointLight('white', 1);
    this.light.position.copy(this.camera.position);
    this.scene.add(this.light);
  }

  ngAfterViewInit(): void {
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setSize(640, 320);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.cube.rotation.x += 0.003;
    this.cube.rotation.y += 0.01;
    this.light.position.copy(this.camera.position);
    this.renderer.render(this.scene, this.camera);
  }
}
