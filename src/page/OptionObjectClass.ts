export default class OptionObject {
  image: string;
  brightness: string;
  grayscale: string;
  constructor(image: string, brightness: string, grayscale: string) {
    (this.image = image),
      (this.brightness = brightness),
      (this.grayscale = grayscale);
  }
  setImage(imageUrl: string) {
    this.image = imageUrl;
  }
  setBrightness(brightness: string) {
    this.brightness = brightness;
  }
  setGrayscale(grayscale: string) {
    this.grayscale = grayscale;
  }
}
