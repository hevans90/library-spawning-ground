import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import * as Three from 'three';

@Component({
  selector: 'select3d-dropdown',
  template: `
  <div #canvas>
  </div>
  `,
  styles: [],
})
export class Select3dComponent implements AfterViewInit {
  public scene: Three.Scene;
  public camera: Three.PerspectiveCamera;
  public renderer: Three.WebGLRenderer = new Three.WebGLRenderer();
  public cube: Three.Mesh;
  @ViewChild('canvas') private canvasRef: ElementRef;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.renderer.setSize(event.target.innerWidth, event.target.innerHeight);
  }

  constructor() {
    this.scene = new Three.Scene();
    this.camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000,
    );
    this.camera.position.z = 800;
    const geometry = new Three.BoxGeometry(500, 200, 200);
    const material = new Three.MeshPhongMaterial({
      color: 'grey',
    });
    this.cube = new Three.Mesh(geometry, material);
    this.scene.add(this.cube);

    const light = new Three.PointLight('red', 2);
    light.position.set(0, 0, 500);
    this.scene.add(light);
  }

  ngAfterViewInit(): void {
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.cube.rotation.z += 0.02;
    this.renderer.render(this.scene, this.camera);
  }
}
